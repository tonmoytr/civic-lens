import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";

export const metadata = {
  title: "Privacy Policy • Civic Lens",
  description:
    "Learn how Civic Lens collects, uses, shares, and protects your information across our website, newsletters, and media products.",
};

export default function PrivacyPolicyPage() {
  const updated = "September 28, 2025";

  return (
    <>
      <Navbar />
      <main className="policy-page container">
        <header className="policy-hero">
          <div className="policy-container">
            <p className="policy-kicker">Civic Lens</p>
            <h1 className="policy-title">Privacy Policy</h1>
            <p className="policy-date">Last updated: {updated}</p>
            <p className="policy-intro">
              Civic Lens is a news and media organization. This Privacy Policy
              explains how we collect, use, and share information when you visit
              our websites, read our newsletters, listen to our podcasts, engage
              with our social features, or otherwise interact with our services
              (collectively, the “Services”).
            </p>
          </div>
        </header>

        <div className="policy-container policy-body">
          {/* TOC */}
          <aside className="policy-toc" aria-labelledby="toc-label">
            <h2 style={{padding: "5px", fontWeight:"600", fontSize:"16px", textDecoration:"underline"}} id="toc-label">On this page</h2>
            <nav>
              <ol>
                <li>
                  <a href="#who-we-are">Who we are</a>
                </li>
                <li>
                  <a href="#scope">Scope</a>
                </li>
                <li>
                  <a href="#info-we-collect">Information we collect</a>
                </li>
                <li>
                  <a href="#how-we-use">How we use information</a>
                </li>
                <li>
                  <a href="#cookies">Cookies & tracking</a>
                </li>
                <li>
                  <a href="#ads-analytics">Advertising & analytics partners</a>
                </li>
                <li>
                  <a href="#newsletters">Newsletters & communications</a>
                </li>
                <li>
                  <a href="#community">Comments, community & UGC</a>
                </li>
                <li>
                  <a href="#sharing">How we share information</a>
                </li>
                <li>
                  <a href="#transfers">International data transfers</a>
                </li>
                <li>
                  <a href="#your-rights">Your privacy rights</a>
                </li>
                <li>
                  <a href="#retention">Data retention</a>
                </li>
                <li>
                  <a href="#security">Security</a>
                </li>
                <li>
                  <a href="#children">Children’s privacy</a>
                </li>
                <li>
                  <a href="#changes">Changes to this policy</a>
                </li>
                <li>
                  <a href="#contact">Contact us</a>
                </li>
              </ol>
            </nav>
          </aside>

          {/* Content */}
          <article className="policy-content">
            <section className="policy-callout">
              <p>
                Summary: we use data to deliver journalism, personalize content,
                measure performance, support our membership and advertising
                programs, keep our Services secure, and comply with the law. You
                control your choices, including cookies and marketing emails.
              </p>
            </section>

            <section id="who-we-are">
              <h2>Who we are</h2>
              <p>
                Civic Lens (“we,” “us,” or “our”) is an independent media house.
                We operate digital properties including this website and related
                newsletters and podcasts.
              </p>
              <ul>
                <li>
                  <strong>Data Controller:</strong> Civic Lens
                </li>
                <li>
                  <strong>Contact (privacy):</strong>{" "}
                  <a href="mailto:privacy@civiclens.com">
                    privacy@civiclens.com
                  </a>
                </li>
                <li>
                  <strong>Postal:</strong> Civic Lens, Attn: Privacy, 123 Media
                  Way, Your City, Your Country
                </li>
              </ul>
            </section>

            <section id="scope">
              <h2>Scope</h2>
              <p>
                This policy applies to information collected through the
                Services, including pages that link to it. It does not cover
                third-party sites or services we do not control (for example,
                embedded players or external links).
              </p>
            </section>

            <section id="info-we-collect">
              <h2>Information we collect</h2>
              <h3>Information you provide</h3>
              <ul>
                <li>
                  Account or newsletter details (name, email, password
                  preferences).
                </li>
                <li>
                  Profile and community content (comments, likes, bookmarks,
                  submissions, messages).
                </li>
                <li>
                  Support and correspondence (feedback, survey responses,
                  inquiries).
                </li>
              </ul>
              <h3>Information collected automatically</h3>
              <ul>
                <li>
                  Device and usage data (IP address, device identifiers, browser
                  type, pages viewed, referring/exit pages, timestamps,
                  approximate location).
                </li>
                <li>
                  Cookies and similar technologies (pixels, SDKs, local storage)
                  to remember preferences, measure performance, and personalize
                  content/ads.
                </li>
              </ul>
              <h3>Information from partners</h3>
              <ul>
                <li>
                  Analytics, advertising, and social media partners (aggregated
                  or pseudonymous insights).
                </li>
                <li>
                  Podcast and video platforms (downloads, plays, completion and
                  engagement metrics).
                </li>
              </ul>
            </section>

            <section id="how-we-use">
              <h2>How we use information</h2>
              <ul>
                <li>
                  Provide, maintain, and improve the Services and our
                  journalism.
                </li>
                <li>
                  Personalize content recommendations, newsletters, and on-site
                  experiences.
                </li>
                <li>
                  Measure performance of articles, podcasts, newsletters, and
                  ads.
                </li>
                <li>
                  Communicate with you about updates, newsletters, promotions,
                  and surveys.
                </li>
                <li>
                  Prevent fraud, secure our Services, and enforce our terms.
                </li>
                <li>
                  Comply with legal obligations and protect our rights and
                  users.
                </li>
              </ul>
            </section>

            <section id="cookies">
              <h2>Cookies & tracking</h2>
              <p>
                We use the following categories of cookies and similar
                technologies. Where required by law, we request consent and
                honor your choices.
              </p>
              <ul>
                <li>
                  <strong>Strictly necessary:</strong> essential for site
                  functionality and security.
                </li>
                <li>
                  <strong>Functional:</strong> remember settings such as volume,
                  text size, or saved preferences.
                </li>
                <li>
                  <strong>Analytics:</strong> understand usage and improve the
                  Services.
                </li>
                <li>
                  <strong>Advertising:</strong> deliver and measure ads,
                  including interest-based ads.
                </li>
              </ul>
              <p className="policy-note">
                You can adjust cookie preferences via your browser settings or
                our cookie controls (where available). We do not respond to “Do
                Not Track” signals at this time.
              </p>
            </section>

            <section id="ads-analytics">
              <h2>Advertising & analytics partners</h2>
              <p>
                We work with analytics providers and advertising technology
                partners that set cookies or collect identifiers to help us
                measure audiences and deliver relevant ads. Partners may combine
                this data with information from other sources. You can opt out
                of interest-based advertising via your device settings and
                industry tools (e.g., platform ad settings); choices may be
                browser or device specific.
              </p>
            </section>

            <section id="newsletters">
              <h2>Newsletters & communications</h2>
              <p>
                If you subscribe to newsletters or alerts, we process your email
                address and interaction data (opens, clicks) to send and improve
                these communications. You can unsubscribe at any time using the
                link in any email, or by contacting us.
              </p>
            </section>

            <section id="community">
              <h2>Comments, community & user-generated content</h2>
              <p>
                Content you post publicly (e.g., comments) may be visible to
                others and indexed by search engines. We may moderate
                submissions to enforce community standards. Do not share
                information you would prefer to keep private.
              </p>
            </section>

            <section id="sharing">
              <h2>How we share information</h2>
              <ul>
                <li>
                  <strong>Service providers:</strong> vendors who process data
                  for us (hosting, analytics, email, security, payment).
                </li>
                <li>
                  <strong>Advertising & measurement:</strong> ad exchanges,
                  demand partners, and analytics services.
                </li>
                <li>
                  <strong>Legal and safety:</strong> to comply with law, respond
                  to lawful requests, or protect our users and Services.
                </li>
                <li>
                  <strong>Business transfers:</strong> in connection with a
                  merger, acquisition, or asset sale.
                </li>
              </ul>
              <p>
                We do not sell personal information in the traditional sense.
                Where required, we offer opt-out mechanisms for targeted
                advertising or “sharing.”
              </p>
            </section>

            <section id="transfers">
              <h2>International data transfers</h2>
              <p>
                We may process and store information in countries outside of
                your own. When we transfer personal data from the EEA/UK to
                other countries, we rely on approved safeguards such as Standard
                Contractual Clauses.
              </p>
            </section>

            <section id="your-rights">
              <h2>Your privacy rights</h2>
              <h3>EU/EEA & UK (GDPR)</h3>
              <p>
                Subject to conditions and exceptions, you may have the right to
                access, correct, delete, restrict, or object to processing; and
                the right to data portability and to withdraw consent. You can
                also lodge a complaint with your local supervisory authority.
              </p>
              <h3>California & certain U.S. states (CCPA/CPRA, etc.)</h3>
              <p>
                Depending on your state, you may request access, deletion,
                correction, or to opt out of targeted advertising and certain
                disclosures. We will not discriminate against you for exercising
                these rights.
              </p>
              <p>
                To make a request, email{" "}
                <a href="mailto:privacy@civiclens.com">privacy@civiclens.com</a>
                . We will verify your request and respond as required by
                applicable law.
              </p>
            </section>

            <section id="retention">
              <h2>Data retention</h2>
              <p>
                We keep personal information for as long as necessary to provide
                the Services, comply with our legal obligations, resolve
                disputes, and enforce our agreements. Typical retention periods:
                account and newsletter records while active (and for a
                reasonable period afterward), analytics logs up to 24 months,
                and community content until removed under our policies.
              </p>
            </section>

            <section id="security">
              <h2>Security</h2>
              <p>
                We use administrative, technical, and physical safeguards
                designed to protect information. No system is 100% secure;
                please use strong passwords and be mindful when sharing
                information online.
              </p>
            </section>

            <section id="children">
              <h2>Children’s privacy</h2>
              <p>
                Our Services are not directed to children under 13 (or the
                equivalent age of digital consent in your jurisdiction). If you
                believe a child has provided personal information to us, contact
                us and we will take appropriate steps to delete it.
              </p>
            </section>

            <section id="changes">
              <h2>Changes to this policy</h2>
              <p>
                We may update this policy from time to time. When we do, we will
                revise the “Last updated” date above and, where appropriate,
                provide additional notice.
              </p>
            </section>

            <section id="contact">
              <h2>Contact us</h2>
              <p>
                Questions or requests? Email{" "}
                <a href="mailto:privacy@civiclens.com">privacy@civiclens.com</a>{" "}
                or write to: Civic Lens, Attn: Privacy, 123 Media Way, Your
                City, Your Country.
              </p>
            </section>

            {/* Optional structured data to help search engines recognize the policy and contact */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "Civic Lens",
                  url: "https://www.civiclens.example", // replace with real domain
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "privacy",
                      email: "privacy@civiclens.com",
                    },
                  ],
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
