// app/_components/ContactFormSection.jsx
"use client";

import { useState } from "react";

export default function ContactFormSection() {
  const [phone, setPhone] = useState("");

  const onPhoneChange = (e) => {
    // keep ONLY digits
    const digits = e.target.value.replace(/[^\d]/g, "");
    setPhone(digits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // If you want an extra JS guard (browser already validates pattern):
    if (!/^[0-9]{7,15}$/.test(phone)) {
      alert("Please enter a valid phone number (7–15 digits).");
      return;
    }
    // ...send your payload
    console.log("Submitting form with phone:", phone);
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-wrap">
          {/* LEFT: copy + form */}
          <div className="contact-left">
            <div>
              <h2 className="title">Send us a message</h2>
              <p className="contact-text body-large">
                We’d love to hear from you. Fill out the form and we’ll get back
                to you as soon as possible.
              </p>
            </div>

            <form className="contact-form" onSubmit={onSubmit}>
              {/* grid of inputs */}
              <div className="field-wrap">
                <div className="field">
                  <label htmlFor="name" className="field-label">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="input"
                    placeholder="Your full name"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email" className="field-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input email"
                    placeholder="name@email.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone" className="field-label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="input phone"
                    placeholder="e.g., 017XXXXXXXX"
                    value={phone}
                    onChange={onPhoneChange}
                    // mobile keypad + a11y
                    inputMode="numeric"
                    autoComplete="tel"
                    // browser validation (digits only, 7–15)
                    pattern="[0-9]{7,15}"
                    title="Enter 7–15 digits"
                    required
                    maxLength={15}
                  />
                </div>

                <div className="field">
                  <label htmlFor="subject" className="field-label">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="input"
                    placeholder="What’s this about?"
                  />
                </div>
              </div>

              {/* message */}
              <div className="field">
                <label htmlFor="message" className="field-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="textarea"
                  placeholder="Write your message here..."
                  rows={4}
                  required
                />
              </div>

              {/* button */}
              <div className="form-btn">
                <button type="submit" className="primary-button">
                  <span>Send message</span>
                  <img
                    alt=""
                    width="16"
                    height="16"
                    src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/6793250d7a6f0e0dbfe9864b_ic-arrow-right.svg"
                    style={{ marginLeft: 6 }}
                  />
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: image */}
          <figure className="contact-img">
            <div className="on-scroll" aria-hidden="true" />
            <img
              className="contact-image"
              src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67936cb47ced17d6ac519881_contact-p-800.jpg"
              alt="Contact illustration"
              loading="eager"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
