export default function GetInTouch() {
  return (
    <section className="get-in-touch">
      <div className="w-layout-blockcontainer container w-container">
        <div className="contact-grid">
          {/* Investigative Team */}
          <div className="contact-box">
            <div className="contact-block">
              <img
                className="contact-icon"
                alt="Contact Icon"
                loading="lazy"
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67936f2d4373e9c78bc896a4_ic-investigative.svg"
              />
              <div>
                <h6 className="contact-title">Investigative Team</h6>
                <p className="contact-info-text">
                  Contact our investigative team for confidential inquiries.
                </p>
                <a href="mailto:help@civiclens.org" className="plain-link">
                  help@civiclens.org
                </a>
              </div>
            </div>
          </div>

          {/* Broadcast Operation */}
          <div className="contact-box">
            <div className="contact-block">
              <img
                className="contact-icon"
                alt="Contact Icon"
                loading="lazy"
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67936f2df56c0cd0ac90156f_ic-broadcast.svg"
              />
              <div>
                <h6 className="contact-title">Broadcast Operation</h6>
                <p className="contact-info-text">
                  Connect with our broadcast operations team for assistance.
                </p>
                <a
                  href="mailto:help@civiclens.org"
                  className="plain-link"
                >
                  help@civiclens.org
                </a>
              </div>
            </div>
          </div>

          {/* Media Contact */}
          <div className="contact-box">
            <div className="contact-block">
              <img
                className="contact-icon"
                alt="Contact Icon"
                loading="lazy"
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67936f2d53f5924b025241d3_ic-media.svg"
              />
              <div>
                <h6 className="contact-title">Media Contact</h6>
                <p className="contact-info-text">
                  Reach out to our media contact team for inquiries.
                </p>
                <a href="mailto:help@civiclens.org" className="plain-link">
                  help@civiclens.org
                </a>
              </div>
            </div>
          </div>

          {/* Advertising Sales */}
          <div className="contact-box">
            <div className="contact-block">
              <img
                className="contact-icon"
                alt="Contact Icon"
                loading="lazy"
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67936f2db3d85f35abc3ff75_ic-advertise.svg"
              />
              <div>
                <h6 className="contact-title">Advertising Sales</h6>
                <p className="contact-info-text">
                  Contact our advertising sales team for partnership
                  opportunities.
                </p>
                <a href="mailto:ads@civiclens.org" className="plain-link">
                  ads@civiclens.org
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* .contact-grid */}
      </div>
    </section>
  );
}
