"use client";
import { useState } from "react";

export default function AboutFAQ() {
  const TABS = [
    {
      key: "Tab 1",
      label: "General",
      faqs: [
        {
          q: "What kind of topics does your website cover, and who is it for?",
          a: "We cover Business, Technology, World News, Sports, Culture, and Health News — curated for a curious, general audience that values clear, reliable reporting and thoughtful analysis.",
        },
        {
          q: "Who creates the content featured on your platform?",
          a: "Our stories are produced by editors, staff reporters, and vetted contributors. Every piece goes through editorial review and fact‑checking to maintain quality and accuracy.",
        },
        {
          q: "How can I stay informed about your latest articles and updates?",
          a: "Subscribe to our newsletter for curated updates, and follow us on our social channels to get real‑time notifications when new stories go live.",
        },
        {
          q: "How often is the content on your website updated?",
          a: "Daily — with breaking updates as major stories develop. We prioritize timely coverage while keeping long‑form explainers fresh and accurate.",
        },
      ],
    },
    {
      key: "Tab 2",
      label: "Advertising",
      faqs: [
        {
          q: "What advertising opportunities does your website offer?",
          a: "We provide banner placements, sponsored articles, newsletter features, and podcast host‑read integrations to maximize brand visibility and engagement.",
        },
        {
          q: "Can small businesses partner with your platform for promotion?",
          a: "Absolutely. We offer flexible packages and budget‑friendly options tailored to startups and small businesses.",
        },
        {
          q: "How do I measure the success of my advertisement on your platform?",
          a: "You’ll receive performance analytics (impressions, CTR, conversions) with optional UTM tracking and post‑campaign summaries.",
        },
        {
          q: "How can I inquire about advertising rates or custom campaigns?",
          a: "Email our team at advertise@example.com with your goals, timeline, and budget — we’ll propose formats and a package that fits.",
        },
      ],
    },
    {
      key: "Tab 3",
      label: "Technical Support",
      faqs: [
        {
          q: "What should I do if I cannot access certain sections of your website?",
          a: "First, check your internet connection, clear your cache, and try another browser or device. If the problem persists, contact support@example.com with details.",
        },
        {
          q: "Is your website compatible with all browsers and devices?",
          a: "Yes — we optimize for modern browsers (Chrome, Safari, Firefox, Edge) and fully support mobile and tablet layouts.",
        },
        {
          q: "How can I report a bug or technical issue?",
          a: "Send steps to reproduce, your device + browser version, and screenshots if possible to support@example.com.",
        },
        {
          q: "Do you offer accessibility features for users with disabilities?",
          a: "We follow accessibility best practices (alt text, ARIA, keyboard navigation, sufficient contrast) and continuously improve based on feedback.",
        },
      ],
    },
    {
      key: "Tab 4",
      label: "Subscription & Membership",
      faqs: [
        {
          q: "What are the benefits of becoming a member?",
          a: "Members enjoy exclusive content, fewer ads, personalized recommendations, and premium newsletter options.",
        },
        {
          q: "Can I switch between subscription plans?",
          a: "Yes — upgrade, downgrade, or modify anytime from your account settings. Changes take effect in the next billing cycle.",
        },
        {
          q: "Is there a free trial available for new subscribers?",
          a: "Yes — a one‑week free trial lets you explore premium content and features before committing.",
        },
        {
          q: "How can I manage or cancel my subscription?",
          a: "Go to My Subscription in your account to update payment details, change plans, or cancel. Need help? Email support@example.com.",
        },
        {
          q: "Can I submit an article to be featured on your platform?",
          a: "Yes — we accept pitches and guest submissions. Review our guidelines for formatting, sourcing, and editorial standards before sending.",
        },
      ],
    },
    {
      key: "Tab 5",
      label: "Content Submission",
      faqs: [
        {
          q: "What criteria do you use to review guest submissions?",
          a: "Originality, accuracy, relevance, and clarity. We look for unique angles and high‑quality sourcing that provide value to readers.",
        },
        {
          q: "Do you compensate contributors for their work?",
          a: "Commissioned features are typically paid; unsolicited guest posts may be unpaid. Terms are clarified during commissioning.",
        },
        {
          q: "How long does it take for a submitted article to be reviewed?",
          a: "Our editors usually respond within 7–10 business days with an update on status and any requested revisions.",
        },
      ],
    },
  ];

  const [active, setActive] = useState(1); // 1..5
  const [openByTab, setOpenByTab] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  });

  const onTab = (idx) => {
    setActive(idx);
    setOpenByTab((s) => ({ ...s, [idx]: null }));
  };

  const toggle = (idx) => {
    setOpenByTab((s) => ({ ...s, [active]: s[active] === idx ? null : idx }));
  };

  return (
    <section className="faq-section">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="faq-title">Have Any Questions?</h2>

        <div
          className="faq-tabs w-tabs"
          data-easing="ease"
          data-duration-in="300"
          data-duration-out="100"
        >
          {/* Tabs menu */}
          <div className="tabs-menu w-tab-menu">
            {TABS.map((t, i) => (
              <a
                key={t.key}
                className={`faq-tab w-inline-block w-tab-link ${
                  active === i + 1 ? "w--current" : ""
                }`}
                data-w-tab={t.key}
                onClick={() => onTab(i + 1)}
                href="#"
              >
                <div>{t.label}</div>
              </a>
            ))}
          </div>

          {/* Tab panes */}
          <div className="w-tab-content">
            {TABS.map((t, i) => (
              <div
                key={t.key}
                className={`w-tab-pane ${
                  active === i + 1 ? "w--tab-active" : ""
                }`}
                data-w-tab={t.key}
              >
                <div>
                  {t.faqs.map((item, idx) => {
                    const open = openByTab[active] === idx;
                    return (
                      <div
                        key={idx}
                        className={`faq ${idx === 0 ? "top" : ""} w-dropdown`}
                      >
                        <div
                          className="que w-dropdown-toggle"
                          role="button"
                          aria-expanded={open}
                          onClick={() => toggle(idx)}
                        >
                          <div className="que-title">{item.q}</div>
                          <div className="que-icon">
                            {/* Inline SVG plus to mirror OG icon */}
                            <svg
                              className="plus-icon"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                              style={{
                                transform: open ? "rotate(45deg)" : "none",
                                transition: "transform .2s ease",
                              }}
                            >
                              <path d="M7 1h2v14H7z" fill="currentColor" />
                              <path d="M1 7h14v2H1z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                        <nav
                          className="ans w-dropdown-list"
                          style={{ display: open ? "block" : "none" }}
                        >
                          <div className="ans-box">
                            <p className="ans-text">{item.a}</p>
                          </div>
                        </nav>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
