import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";

export const metadata = {
  title: "Terms & Conditions • Civic Lens",
  description:
    "Read the terms that govern your use of Civic Lens websites, newsletters, podcasts, and related services.",
};

export default function TermsPage() {
  const updated = "September 28, 2025";

  return (
    <>
      <Navbar />
      <main className="legal-page container">
        <header className="legal-hero">
          <div className="legal-container">
            <p className="legal-kicker">Civic Lens</p>
            <h1 className="legal-title">Terms &amp; Conditions</h1>
            <p className="legal-date">Last updated: {updated}</p>
            <p className="legal-intro">
              These Terms &amp; Conditions (“Terms”) form a binding agreement
              between you and Civic Lens (“Civic Lens,” “we,” “us,” or “our”)
              and govern your access to and use of our websites, newsletters,
              podcasts, and other services (collectively, the “Services”). By
              using the Services, you agree to these Terms. If you do not agree,
              do not use the Services.
            </p>
          </div>
        </header>

        <div className="legal-container legal-body">
          {/* TOC */}
          <aside className="legal-toc" aria-labelledby="toc-label">
            <h2
              style={{
                padding: "5px",
                fontWeight: "600",
                fontSize: "16px",
                textDecoration: "underline",
              }}
              id="toc-label"
            >
              On this page
            </h2>
            <nav>
              <ol>
                <li>
                  <a href="#acceptance">Acceptance of terms</a>
                </li>
                <li>
                  <a href="#eligibility">Eligibility & accounts</a>
                </li>
                <li>
                  <a href="#use-of-services">Use of the Services</a>
                </li>
                <li>
                  <a href="#ugc">User content & community rules</a>
                </li>
                <li>
                  <a href="#ip">Intellectual property</a>
                </li>
                <li>
                  <a href="#license">License you grant to us</a>
                </li>
                <li>
                  <a href="#third-party">Third-party links & services</a>
                </li>
                <li>
                  <a href="#ads">
                    Advertising, sponsorships & affiliate disclosure
                  </a>
                </li>
                <li>
                  <a href="#subscriptions">
                    Memberships, subscriptions & donations
                  </a>
                </li>
                <li>
                  <a href="#contests">Contests, sweepstakes & promotions</a>
                </li>
                <li>
                  <a href="#dmca">Copyright complaints (DMCA)</a>
                </li>
                <li>
                  <a href="#disclaimers">Disclaimers</a>
                </li>
                <li>
                  <a href="#liability">Limitation of liability</a>
                </li>
                <li>
                  <a href="#indemnity">Indemnification</a>
                </li>
                <li>
                  <a href="#termination">Termination</a>
                </li>
                <li>
                  <a href="#governing-law">Governing law & venue</a>
                </li>
                <li>
                  <a href="#changes">Changes to these Terms</a>
                </li>
                <li>
                  <a href="#contact">Contact us</a>
                </li>
                <li>
                  <a href="#misc">Miscellaneous</a>
                </li>
              </ol>
            </nav>
          </aside>

          {/* Content */}
          <article className="legal-content">
            <section className="legal-callout">
              <p>
                Quick summary: Be respectful, follow the law, don’t misuse our
                platforms, and remember that Civic Lens owns the content we
                create. User submissions must follow our rules. Some sections
                below limit our liability and describe how disputes are handled.
              </p>
            </section>

            <section id="acceptance">
              <h2>1) Acceptance of terms</h2>
              <p>
                By accessing or using the Services, you represent that you are
                capable of entering into a binding agreement and that you have
                read and agree to these Terms and our&nbsp;
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </section>

            <section id="eligibility">
              <h2>2) Eligibility & accounts</h2>
              <ul>
                <li>
                  You must be at least 13 years old (or the age of digital
                  consent in your jurisdiction).
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your login credentials and for all activity under your
                  account.
                </li>
                <li>
                  We may refuse, suspend, or terminate accounts at our
                  discretion, including for violations of these Terms.
                </li>
              </ul>
            </section>

            <section id="use-of-services">
              <h2>3) Use of the Services</h2>
              <p>You agree not to:</p>
              <ul>
                <li>
                  Engage in illegal, harassing, defamatory, hateful, or abusive
                  conduct.
                </li>
                <li>
                  Scrape, crawl, index, or otherwise extract data except as
                  permitted by standard web browsers and RSS.
                </li>
                <li>
                  Attempt to reverse engineer, interfere with, or disrupt the
                  Services or related networks.
                </li>
                <li>
                  Impersonate others or misrepresent your affiliation with any
                  person or entity.
                </li>
              </ul>
            </section>

            <section id="ugc">
              <h2>4) User content & community rules</h2>
              <p>
                The Services may enable comments, submissions, or uploads (“User
                Content”). You are solely responsible for your User Content and
                the consequences of posting it. Do not post content that is
                unlawful, infringing, deceptive, obscene, or violates others’
                privacy or rights.
              </p>
              <p>
                We may moderate, remove, or refuse User Content at our
                discretion, but we do not assume any obligation to do so.
                Community features may be subject to additional guidelines
                published on the relevant page.
              </p>
            </section>

            <section id="ip">
              <h2>5) Intellectual property</h2>
              <p>
                Except for User Content, all materials on the Services—including
                articles, graphics, logos, audio, podcasts, and code—are owned
                by Civic Lens or our licensors and are protected by copyright,
                trademark, and other laws. You may not reproduce, distribute, or
                create derivative works without written permission, except as
                permitted by fair use or other applicable law.
              </p>
            </section>

            <section id="license">
              <h2>6) License you grant to us</h2>
              <p>
                By submitting User Content, you grant Civic Lens a worldwide,
                non-exclusive, royalty-free, sublicensable, and transferable
                license to host, store, reproduce, modify for formatting,
                publish, publicly perform and display, and distribute such
                content in connection with operating, promoting, and improving
                the Services. You represent that you have all rights necessary
                to grant this license.
              </p>
            </section>

            <section id="third-party">
              <h2>7) Third-party links & services</h2>
              <p>
                The Services may include links to third-party sites, embeds,
                players, or services that we do not control. We are not
                responsible for their content, policies, or practices. Your use
                of third-party services is at your own risk and may be governed
                by separate terms.
              </p>
            </section>

            <section id="ads">
              <h2>8) Advertising, sponsorships & affiliate disclosure</h2>
              <p>
                We may display advertising, sponsored content, or affiliate
                links. Sponsored pieces and partnerships are labeled where
                applicable. We may receive compensation when you click links or
                purchase through affiliates. Advertising and measurement
                partners may collect data as described in our Privacy Policy.
              </p>
            </section>

            <section id="subscriptions">
              <h2>9) Memberships, subscriptions & donations</h2>
              <ul>
                <li>
                  Fees, billing cycles, and cancellation terms (if applicable)
                  will be shown at the point of purchase.
                </li>
                <li>
                  Donations are typically non-refundable unless stated otherwise
                  or required by law.
                </li>
                <li>
                  We may change pricing or benefits with reasonable notice as
                  permitted by law.
                </li>
              </ul>
            </section>

            <section id="contests">
              <h2>10) Contests, sweepstakes & promotions</h2>
              <p>
                Promotions may be subject to additional official rules. If these
                Terms conflict with official rules, the official rules govern
                for that promotion.
              </p>
            </section>

            <section id="dmca">
              <h2>11) Copyright complaints (DMCA)</h2>
              <p>
                If you believe your work has been used in a way that constitutes
                infringement, please send a notice to our designated agent at{" "}
                <a href="mailto:legal@civiclens.com">legal@civiclens.com</a>{" "}
                with:
              </p>
              <ul>
                <li>Your contact information.</li>
                <li>
                  Identification of the copyrighted work and the allegedly
                  infringing material (URL).
                </li>
                <li>
                  A statement of good-faith belief and a statement under penalty
                  of perjury that the information is accurate and you are the
                  copyright owner or authorized to act for the owner.
                </li>
                <li>Your physical or electronic signature.</li>
              </ul>
            </section>

            <section id="disclaimers">
              <h2>12) Disclaimers</h2>
              <p>
                The Services are provided “as is” and “as available.” To the
                fullest extent permitted by law, Civic Lens disclaims all
                warranties, express or implied, including merchantability,
                fitness for a particular purpose, and non-infringement. We do
                not warrant that the Services will be uninterrupted, secure, or
                error-free, or that information is accurate, complete, or
                current.
              </p>
            </section>

            <section id="liability">
              <h2>13) Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Civic Lens and our
                affiliates, officers, employees, and agents will not be liable
                for any indirect, incidental, special, consequential, or
                punitive damages, or for any loss of profits or revenues,
                whether incurred directly or indirectly, or any loss of data,
                use, or goodwill. Our total liability for any claim arising out
                of or relating to the Services will not exceed the greater of
                (a) the amount you paid to us in the 12 months preceding the
                claim, or (b) USD 100.
              </p>
            </section>

            <section id="indemnity">
              <h2>14) Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Civic Lens and
                our affiliates from any claims, liabilities, damages, losses,
                and expenses, including reasonable attorneys’ fees, arising out
                of or related to your use of the Services or your violation of
                these Terms.
              </p>
            </section>

            <section id="termination">
              <h2>15) Termination</h2>
              <p>
                We may suspend or terminate your access to the Services at any
                time, with or without notice, for conduct that we believe
                violates these Terms or is otherwise harmful. Upon termination,
                all licenses and rights granted to you will cease immediately.
              </p>
            </section>

            <section id="governing-law">
              <h2>16) Governing law & venue</h2>
              <p>
                These Terms are governed by the laws of your local jurisdiction
                where Civic Lens is established, without regard to
                conflict-of-laws principles. Courts located in that jurisdiction
                will have exclusive jurisdiction over any dispute not subject to
                arbitration (if applicable).
              </p>
            </section>

            <section id="changes">
              <h2>17) Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time. When we do, we will
                revise the “Last updated” date above and, where appropriate,
                provide additional notice. Your continued use of the Services
                after changes take effect constitutes acceptance of the updated
                Terms.
              </p>
            </section>

            <section id="contact">
              <h2>18) Contact us</h2>
              <p>
                Questions about these Terms? Email{" "}
                <a href="mailto:legal@civiclens.com">legal@civiclens.com</a> or
                write: Civic Lens, Attn: Legal, 123 Media Way, Your City, Your
                Country.
              </p>
            </section>

            <section id="misc">
              <h2>19) Miscellaneous</h2>
              <ul>
                <li>
                  <strong>Severability:</strong> If any provision is found
                  unenforceable, the remaining terms remain in effect.
                </li>
                <li>
                  <strong>No waiver:</strong> Failure to enforce a provision is
                  not a waiver.
                </li>
                <li>
                  <strong>Assignment:</strong> You may not assign these Terms
                  without our consent; we may assign them as allowed by law.
                </li>
                <li>
                  <strong>Entire agreement:</strong> These Terms constitute the
                  entire agreement between you and Civic Lens regarding the
                  Services.
                </li>
                <li>
                  <strong>Force majeure:</strong> We are not liable for delays
                  or failures due to events beyond our reasonable control.
                </li>
              </ul>
            </section>

            {/* Optional structured data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  name: "Terms & Conditions",
                  isPartOf: { "@type": "Organization", name: "Civic Lens" },
                }),
              }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
