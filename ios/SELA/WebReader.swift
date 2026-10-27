import Foundation
import SwiftUI
import WebKit
import UIKit

struct WebReader: UIViewRepresentable {
    let settings: AppSettings

    func makeCoordinator() -> Coordinator { Coordinator(settings: settings) }

    func makeUIView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.websiteDataStore = .default()
        configuration.setURLSchemeHandler(BundleSchemeHandler(), forURLScheme: "sela")
        configuration.userContentController.addScriptMessageHandler(
            context.coordinator, contentWorld: .page, name: "sela"
        )
        let reader = WKWebView(frame: .zero, configuration: configuration)
        reader.navigationDelegate = context.coordinator
        reader.isOpaque = false
        reader.backgroundColor = UIColor(red: 0.988, green: 0.984, blue: 0.973, alpha: 1)
        reader.scrollView.contentInsetAdjustmentBehavior = .never
        reader.load(URLRequest(url: URL(string: "sela://app/index.html")!))
        return reader
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {}

    static func dismantleUIView(_ uiView: WKWebView, coordinator: Coordinator) {
        uiView.configuration.userContentController.removeScriptMessageHandler(
            forName: "sela", contentWorld: .page
        )
        uiView.stopLoading()
        coordinator.cancelAll()
        uiView.navigationDelegate = nil
    }

    @MainActor
    final class Coordinator: NSObject, WKNavigationDelegate, WKScriptMessageHandlerWithReply {
        private let settings: AppSettings
        private var requests: [String: Task<Void, Never>] = [:]

        init(settings: AppSettings) { self.settings = settings }

        func cancelAll() {
            requests.values.forEach { $0.cancel() }
            requests.removeAll()
        }

        func userContentController(_ userContentController: WKUserContentController,
                                   didReceive message: WKScriptMessage,
                                   replyHandler: @escaping (Any?, String?) -> Void) {
            guard message.frameInfo.isMainFrame,
                  let origin = message.frameInfo.request.url,
                  origin.scheme == "sela", origin.host == "app",
                  let body = message.body as? [String: Any] else {
                replyHandler(nil, "Only the bundled SELA reader can use this bridge."); return
            }
            if body["action"] as? String == "language",
               let language = body["language"] as? String, ["en", "ro"].contains(language) {
                UserDefaults.standard.set(language, forKey: "sela.interfaceLanguage")
                replyHandler(["saved": true], nil); return
            }
            if body["action"] as? String == "copy", let text = body["text"] as? String {
                guard text.utf8.count <= 50_000 else {
                    replyHandler(nil, "The copied text is too long."); return
                }
                UIPasteboard.general.string = text
                replyHandler(["copied": true], nil); return
            }
            if body["action"] as? String == "cancel", let id = body["requestID"] as? String {
                requests[id]?.cancel()
                replyHandler(["cancelled": true], nil); return
            }
            guard body["action"] as? String == "request",
                  let path = body["path"] as? String,
                  let relative = URLComponents(string: path), relative.scheme == nil,
                  relative.host == nil, relative.fragment == nil,
                  ["/api/status", "/api/books", "/api/chapter", "/api/original", "/api/search", "/api/study", "/api/word-study", "/api/study-chat"].contains(relative.path),
                  let method = body["method"] as? String,
                  method == (["/api/study", "/api/word-study", "/api/study-chat"].contains(relative.path) ? "POST" : "GET"),
                  path.utf8.count <= 4_000 else {
                replyHandler(nil, "Unsupported SELA request."); return
            }
            let server: String
            do { server = try AppSettings.normalizedURL(settings.serverURL) }
            catch { replyHandler(nil, error.localizedDescription); return }
            guard !server.isEmpty, let url = URL(string: server + path) else {
                replyHandler(nil, "Open Settings and enter your study-server address."); return
            }
            var request = URLRequest(url: url)
            request.httpMethod = method
            request.timeoutInterval = 80
            request.setValue("application/json", forHTTPHeaderField: "Accept")
            if method == "POST" {
                guard let text = body["body"] as? String, text.utf8.count <= (relative.path == "/api/study-chat" ? 72_000 : 10_000) else {
                    replyHandler(nil, "Invalid study request."); return
                }
                request.httpBody = text.data(using: .utf8)
                request.setValue("application/json", forHTTPHeaderField: "Content-Type")
            }
            let id = (body["requestID"] as? String) ?? UUID().uuidString
            guard id.utf8.count <= 100, requests[id] == nil else {
                replyHandler(nil, "Invalid or duplicate request identifier."); return
            }
            requests[id] = Task { @MainActor in
                defer { requests[id] = nil }
                do {
                    let (data, response) = try await APIConnection.session.data(for: request)
                    try Task.checkCancellation()
                    guard let http = response as? HTTPURLResponse else {
                        replyHandler(nil, "The study server returned an invalid response."); return
                    }
                    guard data.count <= 8_000_000 else {
                        replyHandler(nil, "The study server returned too much data."); return
                    }
                    let json = try JSONSerialization.jsonObject(with: data)
                    replyHandler(["status": http.statusCode, "data": json], nil)
                } catch { replyHandler(nil, error.localizedDescription) }
            }
        }

        func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction,
                     decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            guard let url = navigationAction.request.url else {
                decisionHandler(.cancel); return
            }
            if url.scheme == "sela", url.host == "app" { decisionHandler(.allow); return }
            if navigationAction.navigationType == .linkActivated,
               ["https", "http"].contains(url.scheme ?? "") {
                UIApplication.shared.open(url)
            }
            decisionHandler(.cancel)
        }

        func webViewWebContentProcessDidTerminate(_ webView: WKWebView) { webView.reload() }
    }
}

final class BundleSchemeHandler: NSObject, WKURLSchemeHandler {
    private let root = Bundle.main.resourceURL!.appendingPathComponent("Web", isDirectory: true)
    private let types = ["html": "text/html", "js": "text/javascript", "css": "text/css",
                         "svg": "image/svg+xml", "webmanifest": "application/manifest+json"]

    func webView(_ webView: WKWebView, start urlSchemeTask: WKURLSchemeTask) {
        guard let url = urlSchemeTask.request.url, url.host == "app" else {
            urlSchemeTask.didFailWithError(URLError(.badURL)); return
        }
        let path = url.path.removingPercentEncoding ?? url.path
        let file = root.appendingPathComponent(path.hasPrefix("/") ? String(path.dropFirst()) : path)
            .standardizedFileURL
        guard file.path.hasPrefix(root.standardizedFileURL.path + "/"),
              let data = try? Data(contentsOf: file) else {
            urlSchemeTask.didFailWithError(URLError(.fileDoesNotExist)); return
        }
        let headers = [
            "Content-Type": (types[file.pathExtension] ?? "application/octet-stream") + "; charset=utf-8",
            "Content-Security-Policy": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'none'",
            "X-Content-Type-Options": "nosniff"
        ]
        let response = HTTPURLResponse(url: url, statusCode: 200, httpVersion: "HTTP/1.1", headerFields: headers)!
        urlSchemeTask.didReceive(response)
        urlSchemeTask.didReceive(data)
        urlSchemeTask.didFinish()
    }

    func webView(_ webView: WKWebView, stop urlSchemeTask: WKURLSchemeTask) {}
}

// Do not follow redirects to a different server or downgrade the configured HTTPS origin.
final class APIConnection: NSObject, URLSessionTaskDelegate {
    static let delegate = APIConnection()
    static let session: URLSession = {
        let configuration = URLSessionConfiguration.ephemeral
        configuration.timeoutIntervalForRequest = 80
        configuration.timeoutIntervalForResource = 90
        return URLSession(configuration: configuration, delegate: delegate, delegateQueue: nil)
    }()

    func urlSession(_ session: URLSession, task: URLSessionTask,
                    willPerformHTTPRedirection response: HTTPURLResponse,
                    newRequest request: URLRequest,
                    completionHandler: @escaping (URLRequest?) -> Void) {
        let source = task.originalRequest?.url
        let destination = request.url
        let sameOrigin = source?.scheme == "https" && destination?.scheme == "https"
            && source?.host == destination?.host && (source?.port ?? 443) == (destination?.port ?? 443)
        completionHandler(sameOrigin ? request : nil)
    }
}
