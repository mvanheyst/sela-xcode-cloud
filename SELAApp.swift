import SwiftUI

@main
struct SELAApp: App {
    var body: some Scene {
        WindowGroup { ReaderView() }
    }
}

struct ReaderView: View {
    @StateObject private var settings = AppSettings()
    @AppStorage("sela.interfaceLanguage") private var interfaceLanguage = "en"
    @State private var showSettings = false
    @State private var readerGeneration = UUID()

    var body: some View {
        NavigationStack {
            WebReader(settings: settings)
                .id(readerGeneration)
                .background(Color(red: 0.988, green: 0.984, blue: 0.973))
                .navigationTitle("SELA")
                .navigationBarTitleDisplayMode(.inline)
                .toolbar {
                    ToolbarItem(placement: .navigationBarTrailing) {
                        Button { showSettings = true } label: {
                            Image(systemName: "gearshape")
                        }.accessibilityLabel(selaText("Settings"))
                    }
                }
                .sheet(isPresented: $showSettings) {
                    SettingsView(settings: settings) { readerGeneration = UUID() }
                }
        }
        .tint(Color(red: 0.094, green: 0.243, blue: 0.227))
        .preferredColorScheme(.light)
        .environment(\.locale, Locale(identifier: interfaceLanguage))
    }
}
