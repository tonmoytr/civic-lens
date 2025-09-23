export default function Footer() {
  return (
    <section className="footer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-wrap">
          {/* LEFT: Subscribe + Link columns (Pages / Categories / Resources) */}
          <div className="footer-left">
            {/* Subscribe copy */}
            <div className="footer-info">
              <h5 className="footer-title">
                Stay updated with the latest news, stories, and insights from
                around the globe.
              </h5>

              {/* Subscribe form */}
              {/* <div className="footer-form w-form">
                <form
                  id="wf-form-Contact-Form"
                  name="wf-form-Contact-Form"
                  method="get"
                >
                  <div className="footer-field">
                    <input
                      className="footer-input w-input"
                      id="email-2"
                      name="email-2"
                      type="email"
                      placeholder="Enter your e-mail..."
                      required
                    />
                    <input
                      type="submit"
                      value="Subscribe Now"
                      data-wait="Please wait..."
                      className="subscribe-button w-button"
                    />
                  </div>
                </form>
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div> */}
            </div>

            {/* Link columns exactly like OG */}
            <div className="footer-menu">
              <div>
                <div className="menu-label">Pages</div>
                <div className="footer-links">
                  <a className="footer-link" href="/about">
                    About us
                  </a>
                  <a className="footer-link" href="/news-category">
                    Categories
                  </a>
                  <a className="footer-link" href="/news">
                    News
                  </a>
                  <a className="footer-link" href="/authors">
                    Authors
                  </a>
                  <a className="footer-link" href="/podcast">
                    Podcast
                  </a>
                  <a className="footer-link" href="/subscription">
                    Newsletter Plans
                  </a>
                </div>
              </div>

              <div>
                <div className="menu-label">Categories</div>
                <div className="w-dyn-list">
                  <div role="list" className="footer-links w-dyn-items">
                    <div role="listitem" className="footer-category w-dyn-item">
                      <a className="footer-link" href="/news/business">
                        Politics
                      </a>
                    </div>
                    <div role="listitem" className="footer-category w-dyn-item">
                      <a className="footer-link" href="/news/world-news">
                        World News
                      </a>
                    </div>
                    <div role="listitem" className="footer-category w-dyn-item">
                      <a className="footer-link" href="/news/sports">
                        Sports
                      </a>
                    </div>
                    <div role="listitem" className="footer-category w-dyn-item">
                      <a className="footer-link" href="/news/culture">
                        Culture
                      </a>
                    </div>
                    <div role="listitem" className="footer-category w-dyn-item">
                      <a className="footer-link" href="/news/technology">
                        Technology
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="menu-label">Resources</div>
                <div className="footer-links">
                  <a className="footer-link" href="/contact-us">
                    Contact us
                  </a>
                  <a className="footer-link" href="/advertise">
                    Advertise
                  </a>
                  <a className="footer-link" href="/template-info/changelog">
                    Changelog
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Socials (Facebook, YouTube, Instagram, Twitter, Reddit, RSS) */}
          <div className="footer-right">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer-social w-inline-block"
            >
              <div className="social-text">
                <div className="social-icon">
                  <img
                    loading="lazy"
                    alt="Social Icon"
                    src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933a840991c8a9d7621aed_ic-facebook.svg"
                  />
                </div>
                <div>Facebook</div>
              </div>
              <img
                loading="lazy"
                alt="Arrow"
                className="arrow"
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933afeaaa36e3091fc2170_ic-white-arrow.svg"
              />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="footer-social w-inline-block"
            >
              <div className="social-text">
                <div className="social-icon">
                  <img
                    loading="lazy"
                    alt="Social Icon"
                    src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933a846ea5a2c70ac0ed07_ic-youtube.svg"
                  />
                </div>
                <div>YouTube</div>
              </div>
              <img
                loading="lazy"
                alt="Arrow"
                className="arrow"
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933afeaaa36e3091fc2170_ic-white-arrow.svg"
              />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              className="footer-social w-inline-block"
            >
              <div className="social-text">
                <div className="social-icon">
                  <img
                    loading="lazy"
                    alt="Social Icon"
                    src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933a8310b7f98ba817a3c1_ic-insta.svg"
                  />
                </div>
                <div>Instagram</div>
              </div>
              <img
                loading="lazy"
                alt="Arrow"
                className="arrow"
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933afeaaa36e3091fc2170_ic-white-arrow.svg"
              />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              className="footer-social w-inline-block"
            >
              <div className="social-text">
                <div className="social-icon">
                  <img
                    loading="lazy"
                    alt="Social Icon"
                    src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933a843b494be3f37069db_ic-twitter.svg"
                  />
                </div>
                <div>Twitter</div>
              </div>
              <img
                loading="lazy"
                alt="Arrow"
                className="arrow"
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933afeaaa36e3091fc2170_ic-white-arrow.svg"
              />
            </a>

            <a
              href="https://www.reddit.com/"
              target="_blank"
              className="footer-social w-inline-block"
            >
              <div className="social-text">
                <div className="social-icon">
                  <img
                    loading="lazy"
                    alt="Social Icon"
                    src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933a83c97e1d2721da783c_ic-reddit.svg"
                  />
                </div>
                <div>Reddit</div>
              </div>
              <img
                loading="lazy"
                alt="Arrow"
                className="arrow"
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933afeaaa36e3091fc2170_ic-white-arrow.svg"
              />
            </a>

            <a
              href="https://rss.com/"
              target="_blank"
              className="footer-social w-inline-block"
            >
              <div className="social-text">
                <div className="social-icon">
                  <img
                    loading="lazy"
                    alt="Social Icon"
                    src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933a8371e6148615b71f3a_ic-rss.svg"
                  />
                </div>
                <div>RSS.com</div>
              </div>
              <img
                loading="lazy"
                alt="Arrow"
                className="arrow"
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67933afeaaa36e3091fc2170_ic-white-arrow.svg"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="ftr-left">
            <a href="/" className="brand w-inline-block w--current">
              <img
                loading="lazy"
                alt="Civic Lens"
                style={{width: "110px"}}
                src="/assets/images/logo/foot.png"
              />
            </a>
            <div className="ftr-divider"></div>
            {/* <div className="ftr-links">
              <a className="footer-link" href="/privacy-policy">
                Privacy Policy
              </a>
              <a className="footer-link" href="/terms-conditions">
                Terms &amp; Conditions
              </a>
              <a className="footer-link" href="/template-info/licensing">
                License
              </a>
            </div> */}
          </div>

          <div className="ftr-right">
            <div>© 2025 Civic Lens.</div>
            <div>
              Designed
              <a
                className="footer-link"
                href="https://nixar.io/"
                target="_blank"
              >
                {" "}
                &
              </a>
              Powered by
              <a
                style={{ color: "orange" }}
                className="footer-link"
                href="https://aptecode.com/"
                target="_blank"
              >
                {" "}
                ApteCode
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
