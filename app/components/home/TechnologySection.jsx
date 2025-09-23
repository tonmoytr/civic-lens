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
                        src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679481dbfdb5af29738f15bf_news-thumb-23.jpg"
                      />
                    </div>
                    <div className="tn-data">
                      <div className="news-date">
                        <div>Technology</div>
                        <div className="divider"></div>
                        <div>Feb 10, 2025</div>
                      </div>
                      <h5 className="feature-news-title">
                        Smart homes revolution how iot is transforming living
                        spaces
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
                        src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679482333fefb73440151487_news-thumb-26.jpg"
                      />
                    </div>
                    <div className="tn-data">
                      <div className="news-date">
                        <div>Technology</div>
                        <div className="divider"></div>
                        <div>Jan 25, 2025</div>
                      </div>
                      <h5 className="feature-news-title">
                        The future of 5G connecting a world at lightning speed
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
                        src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679481f38a347375dcd6c4cf_news-thumb-24.jpg"
                      />
                    </div>
                    <div className="tn-data">
                      <div className="news-date">
                        <div>Technology</div>
                        <div className="divider"></div>
                        <div>Jan 25, 2025</div>
                      </div>
                      <h5 className="feature-news-title">
                        Cybersecurity at risk the growing threat of digital
                        breaches
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
                        src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67947f53ddde9f4bb0c94dcb_news-thumb-09.jpg"
                      />
                    </div>
                    <div className="tn-data">
                      <div className="news-date">
                        <div>Technology</div>
                        <div className="divider"></div>
                        <div>Jan 25, 2025</div>
                      </div>
                      <h5 className="feature-news-title">
                        Transforming entertainment, education &amp; beyond
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
                      src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/6794837513d2f02fdb097a6a_news-thumb-30.jpg"
                    />
                    <div className="ftn-data">
                      <div className="author-tag">Kristin Watson</div>
                      <div>
                        <div className="ftn-date">Jan 25, 2025</div>
                        <h3 className="ftn-title">
                          Future-focused an in-depth look at cutting-edge tech
                          trends
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
