export default function TechnologySection() {
  return (
    <section className="news">
      <div className="w-layout-blockcontainer container w-container">
        {/* Title + View All */}
        <div className="section-title">
          <h2 className="single-title">Technology</h2>
          <a
            href="/news-categories/technology"
            className="secondary-button w-inline-block"
          >
            <div
              style={{
                border: "1px solid black;",
                borderRadius: "9px;",
                padding: "7px 18px",
              }}
            >
              View All
            </div>
            {/* <img
              className="arrow"
              loading="lazy"
              alt="Arrow"
              src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/679325bd8b8c42f40706a8af_dd55803183fe032b44b49869d93eba77_ic-arrow.svg"
            /> */}
          </a>
        </div>

        <div className="technology-wrap">
          {/* Left: technology-news (4 items) */}
          <div className="technology-news">
            <div className="w-dyn-list">
              <div className="tn-list w-dyn-items" role="list">
                {/* Item 1 */}
                <div className="tn-item w-dyn-item" role="listitem">
                  <a
                    href="/news/technology/smart-homes-revolution"
                    className="tn-link w-inline-block"
                  >
                    <div className="tn-img">
                      <img
                        className="tn-image"
                        loading="lazy"
                        alt="News Image"
                        src="/assets/images/tech/3.webp"
                      />
                    </div>
                    <div className="tn-data">
                      <div className="news-date">
                        <div>Technology</div>
                        <div className="divider"></div>
                        <div>Feb 10, 2025</div>
                      </div>
                      <h5 className="feature-news-title">
                        Google Secretly Handed ICE Data About Pro-Palestine
                        Student Activist
                      </h5>
                    </div>
                  </a>
                </div>

                {/* Item 2 */}
                <div className="tn-item w-dyn-item" role="listitem">
                  <a
                    href="/news/technology/future-of-5g"
                    className="tn-link w-inline-block"
                  >
                    <div className="tn-img">
                      <img
                        className="tn-image"
                        loading="lazy"
                        alt="News Image"
                        src="/assets/images/tech/4.webp"
                      />
                    </div>
                    <div className="tn-data">
                      <div className="news-date">
                        <div>Technology</div>
                        <div className="divider"></div>
                        <div>Jan 25, 2025</div>
                      </div>
                      <h5 className="feature-news-title">
                        Proton Mail Suspended Journalist Accounts at Request of
                        Cybersecurity Agency
                      </h5>
                    </div>
                  </a>
                </div>

                {/* Item 3 */}
                <div className="tn-item w-dyn-item" role="listitem">
                  <a
                    href="/news/technology/cybersecurity-at-risk"
                    className="tn-link w-inline-block"
                  >
                    <div className="tn-img">
                      <img
                        className="tn-image"
                        loading="lazy"
                        alt="News Image"
                        src="/assets/images/tech/5.webp"
                      />
                    </div>
                    <div className="tn-data">
                      <div className="news-date">
                        <div>Technology</div>
                        <div className="divider"></div>
                        <div>Jan 25, 2025</div>
                      </div>
                      <h5 className="feature-news-title">
                        Border Patrol Wants Advanced AI to Spy on American
                        Cities
                      </h5>
                    </div>
                  </a>
                </div>

                {/* Item 4 */}
                <div className="tn-item w-dyn-item" role="listitem">
                  <a
                    href="/news/technology/immersive-tech"
                    className="tn-link w-inline-block"
                  >
                    <div className="tn-img">
                      <img
                        className="tn-image"
                        loading="lazy"
                        alt="News Image"
                        src="/assets/images/tech/6.webp"
                      />
                    </div>
                    <div className="tn-data">
                      <div className="news-date">
                        <div>Technology</div>
                        <div className="divider"></div>
                        <div>Jan 25, 2025</div>
                      </div>
                      <h5 className="feature-news-title">
                        Grok Is the Latest in a Long Line of Chatbots to Go Full
                        Nazi
                      </h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: feature-technology (1 big card) */}
          <div className="feature-technology">
            <div className="feature-news w-dyn-list">
              <div className="ftn-list w-dyn-items" role="list">
                <div className="ftn-item w-dyn-item" role="listitem">
                  <a
                    href="/news/technology/future-focused-tech-trends"
                    className="ftn-link w-inline-block"
                  >
                    <img
                      className="ftn-image"
                      loading="lazy"
                      alt="News Image"
                      src="/assets/images/tech/7.webp"
                    />
                    <div className="ftn-data">
                      <div className="author-tag">Kristin Watson</div>
                      <div>
                        <div className="ftn-date">Jan 25, 2025</div>
                        <h3 className="ftn-title">
                          Microsoft Says It’s Censoring Employee Emails Containing the Word “Palestine”
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
