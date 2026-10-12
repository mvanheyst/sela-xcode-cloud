import XCTest
@testable import SELA

final class ServerAddressTests: XCTestCase {
    func testHTTPSOriginNormalization() async throws {
        let normalized = try await AppSettings.normalizedURL("  https://study.example.com/  ")
        XCTAssertEqual(normalized, "https://study.example.com")
        let withPort = try await AppSettings.normalizedURL("https://study.example.com:8443")
        XCTAssertEqual(withPort, "https://study.example.com:8443")
    }

    func testBlankAddressPreservesExplicitExampleMode() async throws {
        let normalized = try await AppSettings.normalizedURL(" \n ")
        XCTAssertEqual(normalized, "")
    }

    func testUnsafeAndUnsupportedServerAddressesAreRejected() async {
        for address in ["http://study.example.com", "https://user:password@study.example.com",
                        "https://study.example.com/api", "https://study.example.com?key=secret",
                        "https://study.example.com#fragment", "javascript:alert(1)"] {
            do {
                _ = try await AppSettings.normalizedURL(address)
                XCTFail("Accepted an unsupported server address: \(address)")
            } catch {
                XCTAssertTrue(error is SettingsError)
            }
        }
    }
}
