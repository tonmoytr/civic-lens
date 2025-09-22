"use client";

export default function ContactFormSection() {
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

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
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
                    placeholder="+1 (555) 000-0000"
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
            {/* subtle overlay block is present in CSS as .on-scroll */}
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
