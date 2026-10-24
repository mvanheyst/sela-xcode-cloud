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
        selaText("Enter an HTTPS server address without a path, login details, query, or fragment.")
    }
}

struct SettingsView: View {
    @ObservedObject var settings: AppSettings
    var onSaved: () -> Void
    @Environment(\.dismiss) private var dismiss
    @State private var draft = ""
    @State private var status = ""
    @State private var testing = false
    @AppStorage("sela.interfaceLanguage") private var interfaceLanguage = "en"

    var body: some View {
        NavigationStack {
            Form {
                Section {
                    TextField("https://your-study-server.com", text: $draft)
                        .keyboardType(.URL).textInputAutocapitalization(.never)
                        .autocorrectionDisabled()
                    Button(testing ? selaText("Connecting…") : selaText("Test connection")) { testConnection() }
                        .disabled(testing)
                    if !status.isEmpty { Text(status).font(.footnote) }
                } header: { Text(selaText("Study server")) } footer: {
                    Text(selaText("Your administrator provides this address. Leave it blank to use the included example verses. Complete chapters and original-language study require an internet connection to the server."))
                }
                Section(selaText("Your reading")) {
                    Text(selaText("Highlights and notes stay on this device. They are not synchronized with other devices and may be removed when the app is deleted."))
                    Text(selaText("AI studies use the original Greek/Hebrew source and lexical data, in the language of your selected edition. English studies may also use WEB context. Licensed reading text and personal notes are not sent to the AI provider. Verify commentary against trusted scholarship."))
                }
                Section(selaText("Scripture sources")) {
                    Text(selaText("Authorized Bible reading editions are supplied by YouVersion through your study server. WEB and KJV can use the existing Scripture service when YouVersion access is unavailable. Passage requests identify the Bible reference and the server application. Your notes and random device/session identifiers are not sent to Scripture providers."))
                }
                Section(selaText("About SELA")) {
                    Text(selaText("Scripture & Study"))
                    Text(selaText("A quiet place to read, mark verses, and explore Greek, Hebrew and Aramaic."))
                    Text("\(selaText("Version")) \(Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String ?? "1.0") (\(Bundle.main.object(forInfoDictionaryKey: "CFBundleVersion") as? String ?? "1"))")
                        .font(.footnote)
                }
            }
            .navigationTitle(selaText("Settings")).navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) { Button(selaText("Cancel")) { dismiss() } }
                ToolbarItem(placement: .confirmationAction) {
                    Button(selaText("Save")) {
                        do { try settings.save(draft); onSaved(); dismiss() }
                        catch { status = interfaceLanguage == "ro" ? "Conexiunea sau adresa serverului nu este validă. Reîncearcă." : error.localizedDescription }
                    }.disabled(testing)
                }
            }
            .onAppear { draft = settings.serverURL }
        }.environment(\.locale, Locale(identifier: interfaceLanguage))
    }

    private func testConnection() {
        testing = true
        Task { @MainActor in
            defer { testing = false }
            do {
                let base = try AppSettings.normalizedURL(draft)
                guard !base.isEmpty, let url = URL(string: base + "/api/status") else {
                    status = selaText("No server configured. Included examples remain available."); return
                }
                var request = URLRequest(url: url)
                request.timeoutInterval = 15
                let (data, response) = try await APIConnection.session.data(for: request)
                guard let http = response as? HTTPURLResponse, http.statusCode == 200,
                      let json = try JSONSerialization.jsonObject(with: data) as? [String: Any],
                      json["ready"] as? Bool == true else {
                    status = selaText("This address did not return a ready SELA study server."); return
                }
                status = json["aiEnabled"] as? Bool == true
                    ? selaText("Connected. Original-language data and AI studies are enabled.")
                    : selaText("Connected. Original-language data is enabled; AI studies are disabled.")
            } catch { status = interfaceLanguage == "ro" ? "Conexiunea sau adresa serverului nu este validă. Reîncearcă." : error.localizedDescription }
        }
    }
}

func selaText(_ text: String) -> String {
    guard UserDefaults.standard.string(forKey: "sela.interfaceLanguage") == "ro" else { return text }
    let translations: [String: String] = [
        "Version": "Versiunea",
        "Enter an HTTPS server address without a path, login details, query, or fragment.": "Introdu adresa HTTPS a serverului, fără cale, date de autentificare, parametri sau fragment.",
        "Connecting…": "Se conectează…",
        "Test connection": "Testează conexiunea",
        "Study server": "Serverul de studiu",
        "Your administrator provides this address. Leave it blank to use the included example verses. Complete chapters and original-language study require an internet connection to the server.": "Administratorul furnizează această adresă. Las-o necompletată pentru exemplele incluse. Capitolele complete și studiul textului original necesită conexiune la server.",
        "Your reading": "Lectura ta",
        "Highlights and notes stay on this device. They are not synchronized with other devices and may be removed when the app is deleted.": "Evidențierile și notițele rămân pe acest dispozitiv. Nu sunt sincronizate și se pot pierde dacă ștergi aplicația.",
        "AI studies use the original Greek/Hebrew source and lexical data, in the language of your selected edition. English studies may also use WEB context. Licensed reading text and personal notes are not sent to the AI provider. Verify commentary against trusted scholarship.": "Studiile AI folosesc textul original grecesc, ebraic sau aramaic și date lexicale, în limba versiunii selectate. Studiile englezești pot folosi și contextul WEB. Textul edițiilor licențiate și notițele personale nu sunt trimise serviciului AI. Verifică explicațiile în lucrări de specialitate.",
        "Scripture sources": "Sursele biblice",
        "Authorized Bible reading editions are supplied by YouVersion through your study server. WEB and KJV can use the existing Scripture service when YouVersion access is unavailable. Passage requests identify the Bible reference and the server application. Your notes and random device/session identifiers are not sent to Scripture providers.": "Edițiile biblice autorizate sunt furnizate de YouVersion prin serverul de studiu. WEB și KJV pot folosi sursa existentă dacă accesul YouVersion nu este disponibil. Solicitările identifică pasajul și aplicația serverului. Notițele și identificatori aleatorii ai dispozitivului sau sesiunii nu sunt trimiși furnizorilor biblici.",
        "About SELA": "Despre SELA",
        "Scripture & Study": "Scriptură și studiu",
        "A quiet place to read, mark verses, and explore Greek, Hebrew and Aramaic.": "Un loc liniștit pentru a citi, a evidenția versete și a explora greaca, ebraica și aramaica.",
        "Settings": "Setări",
        "Cancel": "Anulează",
        "Save": "Salvează",
        "No server configured. Included examples remain available.": "Nu este configurat un server. Exemplele incluse rămân disponibile.",
        "This address did not return a ready SELA study server.": "Adresa nu a răspuns ca server SELA pregătit.",
        "Connected. Original-language data and AI studies are enabled.": "Conectat. Textul original și studiile AI sunt disponibile.",
        "Connected. Original-language data is enabled; AI studies are disabled.": "Conectat. Textul original este disponibil; studiile AI nu sunt activate."
    ]
    return translations[text] ?? text
}
