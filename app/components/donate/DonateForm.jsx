"use client";

import { useState } from "react";

const AMOUNTS = [50, 100, 250, 500, 1000, 2500, 25000]; // last one shows a star in UI

// helper: number -> "$1,234"
function formatMoney(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "";
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function DonateForm() {
  const [freq, setFreq] = useState("monthly"); // 'monthly' | 'one-time'
  const [amount, setAmount] = useState(AMOUNTS[0]);
  const [other, setOther] = useState("");
  const [pay, setPay] = useState("card"); // 'checking' | 'card' | 'apple'
  const effectiveAmount = other ? Number(other || 0) : amount;

  const onSelectAmount = (val) => {
    setAmount(val);
    setOther("");
  };

  return (
    <section className="don-card-wrap">
      <div className="don-card">
        {/* Header */}
        <header className="don-head">
          <h1 className="don-title">Support PBS News Hour</h1>
          <p className="don-sub">
            Your generous tax-deductible gift makes our program possible… Please
            donate here to support journalism with integrity. Thank you.
          </p>
        </header>

        {/* Frequency */}
        <div className="don-block">
          <div className="don-label">Select a donation type</div>
          <div className="don-toggle">
            <button
              type="button"
              className={`don-toggle-btn ${
                freq === "monthly" ? "is-active" : ""
              }`}
              onClick={() => setFreq("monthly")}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`don-toggle-btn ${
                freq === "one-time" ? "is-active" : ""
              }`}
              onClick={() => setFreq("one-time")}
            >
              One-Time
            </button>
          </div>
        </div>

        {/* Amounts */}
        <div className="don-block">
          <div className="don-label">Select an amount</div>
          <div className="don-amounts">
            {AMOUNTS.map((amt, i) => {
              const isSelected = !other && amount === amt;
              const showStar = amt === 25000;
              return (
                <button
                  key={amt}
                  type="button"
                  className={`don-amt ${isSelected ? "is-selected" : ""}`}
                  onClick={() => onSelectAmount(amt)}
                >
                  <span>{formatMoney(amt)}</span>

                  {showStar && (
                    <sup className="don-star" aria-label="special tier">
                      *
                    </sup>
                  )}
                </button>
              );
            })}
            {/* Other */}
            <div className={`don-amt-other ${other ? "is-selected" : ""}`}>
              <span className="don-amt-prefix">$</span>
              <input
                type="number"
                min="1"
                inputMode="numeric"
                placeholder="Other"
                value={other}
                onChange={(e) => setOther(e.target.value)}
              />
            </div>
          </div>

          <div className="don-help">
            <a
              href="https://give.newshour.org/page/85597/donate/1#checks"
              target="_blank"
              rel="noreferrer"
            >
              I’d like to send a check, donate stock, give through an IRA or a
              Donor Advised Fund.
            </a>
            <div className="don-friends">
              <span className="don-star" aria-hidden>
                *
              </span>{" "}
              <a
                href="https://www.friendsofthenewshour.org"
                target="_blank"
                rel="noreferrer"
              >
                Become a Friend of the News Hour.
              </a>
            </div>
          </div>
        </div>

        {/* Your details */}
        <div className="don-divider" />

        <div className="don-block">
          <h2 className="don-h2">Your details</h2>
          <form className="don-form" onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="field">
                <label>First Name:</label>
                <input type="text" />
              </div>
              <div className="field">
                <label>Last Name:</label>
                <input type="text" />
              </div>
            </div>

            <div className="row">
              <div className="field full">
                <label>Street:</label>
                <input type="text" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>City:</label>
                <input type="text" />
              </div>
              <div className="field">
                <label>State:</label>
                <select defaultValue="">
                  <option value="" disabled>
                    (select)
                  </option>
                  {/* US states + DC (enough for the UI; extend if you like) */}
                  {[
                    "Alabama",
                    "Alaska",
                    "Arizona",
                    "Arkansas",
                    "California",
                    "Colorado",
                    "Connecticut",
                    "Delaware",
                    "District of Columbia",
                    "Florida",
                    "Georgia",
                    "Hawaii",
                    "Idaho",
                    "Illinois",
                    "Indiana",
                    "Iowa",
                    "Kansas",
                    "Kentucky",
                    "Louisiana",
                    "Maine",
                    "Maryland",
                    "Massachusetts",
                    "Michigan",
                    "Minnesota",
                    "Mississippi",
                    "Missouri",
                    "Montana",
                    "Nebraska",
                    "Nevada",
                    "New Hampshire",
                    "New Jersey",
                    "New Mexico",
                    "New York",
                    "North Carolina",
                    "North Dakota",
                    "Ohio",
                    "Oklahoma",
                    "Oregon",
                    "Pennsylvania",
                    "Rhode Island",
                    "South Carolina",
                    "South Dakota",
                    "Tennessee",
                    "Texas",
                    "Utah",
                    "Vermont",
                    "Virginia",
                    "Washington",
                    "West Virginia",
                    "Wisconsin",
                    "Wyoming",
                  ].map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label>Zip Code:</label>
                <input type="text" inputMode="numeric" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Country:</label>
                <select defaultValue="">
                  <option value="" disabled>
                    (select)
                  </option>
                  {[
                    "USA",
                    "Canada",
                    "United Kingdom",
                    "Australia",
                    "New Zealand",
                    "Ireland",
                    "France",
                    "Germany",
                    "India",
                  ].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label>Email:</label>
                <input type="email" />
              </div>
              <div className="field">
                <label>Phone:</label>
                <input type="tel" />
              </div>
            </div>
          </form>
        </div>

        {/* Payment information */}
        <div className="don-divider" />
        <div className="don-block">
          <h2 className="don-h2">Payment information</h2>

          {/* Tabs */}
          <div
            className="don-pay-tabs"
            role="tablist"
            aria-label="Payment method"
          >
            <button
              type="button"
              className={`don-pay-tab ${pay === "checking" ? "is-active" : ""}`}
              role="tab"
              aria-selected={pay === "checking"}
              onClick={() => setPay("checking")}
            >
              Checking Account
            </button>
            <button
              type="button"
              className={`don-pay-tab ${pay === "card" ? "is-active" : ""}`}
              role="tab"
              aria-selected={pay === "card"}
              onClick={() => setPay("card")}
            >
              Credit Card
            </button>
            <button
              type="button"
              className={`don-pay-tab ${pay === "apple" ? "is-active" : ""}`}
              role="tab"
              aria-selected={pay === "apple"}
              onClick={() => setPay("apple")}
            >
              Apple Pay
            </button>
          </div>

          {/* Checking */}
          {pay === "checking" && (
            <div className="don-pay-panel">
              <div className="row">
                <div className="field">
                  <label>Routing Number:</label>
                  <input type="text" inputMode="numeric" />
                </div>
                <div className="field">
                  <label>Account Number:</label>
                  <input type="text" inputMode="numeric" />
                </div>
                <div className="field">
                  <label>Bank Account Type:</label>
                  <select defaultValue="">
                    <option value="" disabled>
                      (select)
                    </option>
                    <option>Checking</option>
                    <option>Savings</option>
                  </select>
                </div>
              </div>
              <label className="checkline">
                <input type="checkbox" />{" "}
                <span>
                  By checking this option, I agree to use my bank account as a
                  payment method and authorize this organization to debit my
                  bank account to fulfill my donation commitment.
                </span>
              </label>

              <details className="don-faq">
                <summary>Why give from your checking account?</summary>
                <p>
                  Giving from your checking account (EFT) means you won’t have
                  to worry about updating your credit card and you’ll help WETA
                  save on credit card processing fees.
                </p>
              </details>
            </div>
          )}

          {/* Card */}
          {pay === "card" && (
            <div className="don-pay-panel">
              <div className="row">
                <div className="field full">
                  <label>Card Number:</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label>Expiration date:</label>
                  <div className="row row-inline">
                    <select defaultValue="">
                      <option value="" disabled>
                        MM
                      </option>
                      {[
                        "01",
                        "02",
                        "03",
                        "04",
                        "05",
                        "06",
                        "07",
                        "08",
                        "09",
                        "10",
                        "11",
                        "12",
                      ].map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                    <select defaultValue="">
                      <option value="" disabled>
                        YYYY
                      </option>
                      {[...Array(11)].map((_, i) => (
                        <option key={i}>{new Date().getFullYear() + i}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>CVV:</label>
                  <input type="text" inputMode="numeric" />
                </div>
              </div>
            </div>
          )}

          {/* Apple Pay (placeholder UI only) */}
          {pay === "apple" && (
            <div className="don-pay-panel">
              <div className="applepay-placeholder">Apple Pay is selected.</div>
            </div>
          )}
        </div>

        {/* Donate button */}
        <div className="don-actions">
          <button type="button" className="don-submit">
            Donate
          </button>
          <div id="checks" className="don-alt">
            <h3 className="don-h3">To give stock or donate by check</h3>
            <p>
              If you are interested in supporting PBS News Hour through a gift
              of appreciated stock, a direct distribution from an IRA or through
              a Donor Advised Fund, please email{" "}
              <a href="mailto:[email protected]">[email protected]</a> or call
              703-998-1804.
            </p>
            <p>
              To make a gift by check, make your check payable to WETA, and note
              “PBS News Hour” on the memo line, and mail to:
              <br />
              <strong>PBS News Hour</strong>
              <br />
              Attn: Gift Processing
              <br />
              3939 Campbell Avenue
              <br />
              Arlington, VA 22206
            </p>
            <p>
              <a
                href="https://www.pbs.org/newshour/about/frequently-asked-questions"
                target="_blank"
                rel="noreferrer"
              >
                Frequently Asked Questions
              </a>
            </p>
          </div>
        </div>

        {/* Footer note */}
        <footer className="don-foot">
          <p>Copyright 2025 WETA</p>
        </footer>
      </div>
    </section>
  );
}
