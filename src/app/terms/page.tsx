import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <h1 className="text-4xl font-bold">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: April 29, 2026</p>

              <div className="space-y-6 text-muted-foreground">
                <section>
                  <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
                  <p className="leading-relaxed">
                    By accessing or using RenewalIQ ("the Service"), you agree to be bound by these Terms of 
                    Service. If you disagree with any part of these terms, you may not use the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
                  <p className="leading-relaxed">
                    RenewalIQ provides a license database service that aggregates publicly available licensing 
                    information from state regulatory boards. The Service allows users to search, filter, and 
                    export license data for B2B sales intelligence purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
                  <p className="leading-relaxed mb-3">
                    To access the Service, you must create an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Acceptable Use</h2>
                  <p className="leading-relaxed mb-3">You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Resell or redistribute the data obtained through the Service</li>
                    <li>Use automated systems to scrape or bulk-download data</li>
                    <li>Use the Service for spam or unsolicited marketing</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Reverse engineer or copy the Service functionality</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Payment and Billing</h2>
                  <p className="leading-relaxed mb-3">
                    Subscription fees are billed in advance on a monthly or annual basis. All payments are 
                    non-refundable except as required by law. We reserve the right to change our pricing with 
                    30 days notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Data Accuracy</h2>
                  <p className="leading-relaxed">
                    While we strive to provide accurate and up-to-date information, we do not guarantee the 
                    accuracy, completeness, or timeliness of the license data. Data is sourced from government 
                    agencies and may contain errors or delays. Users should verify critical information with 
                    the original source.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
                  <p className="leading-relaxed">
                    RenewalIQ shall not be liable for any indirect, incidental, special, consequential, or 
                    punitive damages resulting from your use of the Service. Our total liability shall not 
                    exceed the amount you paid us in the 12 months preceding the claim.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Termination</h2>
                  <p className="leading-relaxed">
                    We may terminate or suspend your account at any time, with or without cause, with or 
                    without notice. Upon termination, your right to use the Service will immediately cease.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Contact Information</h2>
                  <p className="leading-relaxed">
                    For questions about these Terms of Service, please contact us at{" "}
                    <a href="mailto:legal@renewaliq.com" className="text-primary hover:underline">
                      legal@renewaliq.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
