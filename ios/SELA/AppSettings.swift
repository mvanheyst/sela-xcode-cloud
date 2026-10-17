import Foundation
import SwiftUI

@MainActor
final class AppSettings: ObservableObject {
    @Published private(set) var serverURL: String

    init() {
        serverURL = UserDefaults.standard.string(forKey: "sela.serverURL")
            ?? (Bundle.main.object(forInfoDictionaryKey: "SELAAPIBaseURL") as? String ?? "")
    }

    static func normalizedURL(_ value: String) throws -> String {
        let trimmed = value.trimmingCharacters(in: .whitespacesAndNewlines)
        if trimmed.isEmpty { return "" }
        guard let parts = URLComponents(string: trimmed),
              parts.scheme == "https", let host = parts.host, !host.isEmpty,
              parts.user == nil, parts.password == nil, parts.query == nil,
              parts.fragment == nil, parts.path.isEmpty || parts.path == "/",
              parts.url != nil else {
            throw SettingsError.invalidURL
        }
        return trimmed.hasSuffix("/") ? String(trimmed.dropLast()) : trimmed
    }

    func save(_ value: String) throws {
        let normalized = try Self.normalizedURL(value)
        UserDefaults.standard.set(normalized, forKey: "sela.serverURL")
        serverURL = normalized
    }
}

enum SettingsError: LocalizedError {
    case invalidURL
    var errorDescription: String? {
        "Enter an HTTPS server address without a path, login details, query, or fragment."
    }
}

struct SettingsView: View {
    @ObservedObject var settings: AppSettings
    var onSaved: () -> Void
    @Environment(\.dismiss) private var dismiss
    @State private var draft = ""
    @State private var status = ""
    @State private var testing = false

    var body: some View {
        NavigationStack {
            Form {
                Section {
                    TextField("https://your-study-server.com", text: $draft)
                        .keyboardType(.URL).textInputAutocapitalization(.never)
                        .autocorrectionDisabled()
                    Button(testing ? "Connecting…" : "Test connection") { testConnection() }
                        .disabled(testing)
                    if !status.isEmpty { Text(status).font(.footnote) }
                } header: { Text("Study server") } footer: {
                    Text("Your administrator provides this address. Leave it blank to use the included example verses. Complete chapters and original-language study require an internet connection to the server.")
                }
                Section("Your reading") {
                    Text("Highlights and notes stay on this device. They are not synchronized with other devices and may be removed when the app is deleted.")
                    Text("When you request an AI study, WEB verse text and Greek/Hebrew source data are sent through your study server to its AI provider. Personal notes are not included. Commentary is interpretation and should be checked against trusted scholarship.")
                }
                Section("Scripture sources") {
                    Text("When you read NIV, API.Bible receives passage-view reports with random device and session identifiers. Your notes are not included. VDC Romanian text is supplied by YouVersion; passage requests go through the study server.")
                }
                Section("About SELA") {
                    Text("Scripture & Study")
                    Text("A quiet place to read, mark verses, and explore Greek and Hebrew.")
                    Text("Version \(Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String ?? "1.0") (\(Bundle.main.object(forInfoDictionaryKey: "CFBundleVersion") as? String ?? "1"))")
                        .font(.footnote)
                }
            }
            .navigationTitle("Settings").navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) { Button("Cancel") { dismiss() } }
                ToolbarItem(placement: .confirmationAction) {
                    Button("Save") {
                        do { try settings.save(draft); onSaved(); dismiss() }
                        catch { status = error.localizedDescription }
                    }.disabled(testing)
                }
            }
            .onAppear { draft = settings.serverURL }
        }
    }

    private func testConnection() {
        testing = true
        Task { @MainActor in
            defer { testing = false }
            do {
                let base = try AppSettings.normalizedURL(draft)
                guard !base.isEmpty, let url = URL(string: base + "/api/status") else {
                    status = "No server configured. Included examples remain available."; return
                }
                var request = URLRequest(url: url)
                request.timeoutInterval = 15
                let (data, response) = try await APIConnection.session.data(for: request)
                guard let http = response as? HTTPURLResponse, http.statusCode == 200,
                      let json = try JSONSerialization.jsonObject(with: data) as? [String: Any],
                      json["ready"] as? Bool == true else {
                    status = "This address did not return a ready SELA study server."; return
                }
                status = json["aiEnabled"] as? Bool == true
                    ? "Connected. Original-language data and AI studies are enabled."
                    : "Connected. Original-language data is enabled; AI studies are disabled."
            } catch { status = error.localizedDescription }
        }
    }
}
