import CategoriesSection from "./CategoriesSection";

export default function Hero() {
  return (
    <section className="hero">
      <div className="w-layout-blockcontainer container w-container">
        <div className="hero-wrap">
          <div className="hero-top">
            <div className="hero-left">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="hero-news-item w-dyn-item">
                    <a
                      href="/news/world-news/maga-movement"
                      className="hero-news w-inline-block"
                    >
                      <div className="hero-img">
                        <img
                          src="/assets/images/podcasts/3.webp"
                          loading="eager"
                          alt="News Image"
                          className="hero-image"
                        />
                      </div>
                      <div className="hero-data">
                        <h1 className="hero-title">
                          James Carter and Emily Brooks on the future of the
                          MAGA movement
                        </h1>
                        <div className="news-date">
                          <div
                            style={{ backgroundColor: "#6641ee" }}
                            className="news-category"
                          >
                            <img
                              src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67a98e3db164e5805c5e641c_ic-world.svg"
                              loading="lazy"
                              alt="Category Icon"
                            />
                            <div>World News</div>
                          </div>
                          <div className="divider"></div>
                          <div>Jan 25, 2025</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="w-dyn-list">
                <div role="list" className="article-list w-dyn-items">
                  <div role="listitem" className="article-item w-dyn-item">
                    <a
                      href="/news/politics/trump-idea-of-criminal"
                      className="article-link w-inline-block"
                    >
                      <div className="news-date">
                        <div
                          style={{ backgroundColor: "#e3c034" }}
                          className="news-category"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67a98e4f05dce558d931148e_ic-business.svg"
                            loading="lazy"
                            alt="Category Icon"
                          />
                          <div>Politics</div>
                        </div>
                        <div className="divider"></div>
                        <div>Feb 10, 2025</div>
                      </div>
                      <h6 className="headline-title">
                        Trump’s Idea of the Criminal Left Is a Fiction. A
                        Coordinated Defense Against His Fascism Shouldn’t Be.
                      </h6>
                    </a>
                  </div>

                  <div role="listitem" className="article-item w-dyn-item">
                    <a
                      href="/news/technology/goolge-security-handed-ice"
                      className="article-link w-inline-block"
                    >
                      <div className="news-date">
                        <div
                          style={{ backgroundColor: "#e74c3c" }}
                          className="news-category"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67a98e236d41c751e56d47fa_ic-technology.svg"
                            loading="lazy"
                            alt="Category Icon"
                          />
                          <div>Technology</div>
                        </div>
                        <div className="divider"></div>
                        <div>Feb 10, 2025</div>
                      </div>
                      <h6 className="headline-title">
                        Google Secretly Handed ICE Data About Pro-Palestine
                        Student Activist
                      </h6>
                    </a>
                  </div>

                  <div role="listitem" className="article-item w-dyn-item">
                    <a
                      href="/news/culture/afgan-boy-flies-from-kabul"
                      className="article-link w-inline-block"
                    >
                      <div className="news-date">
                        <div
                          style={{ backgroundColor: "#38ade8" }}
                          className="news-category"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67a98e2cb54e95ce01e1807f_ic-culture.svg"
                            loading="lazy"
                            alt="Category Icon"
                          />
                          <div>Culture</div>
                        </div>
                        <div className="divider"></div>
                        <div>Jan 27, 2025</div>
                      </div>
                      <h6 className="headline-title">
                        Afghan boy flies from Kabul to Delhi hiding in plane's
                        landing gear
                      </h6>
                    </a>
                  </div>

                  <div role="listitem" className="article-item w-dyn-item">
                    <a
                      href="/news/politics/trump-wants-label-antifa"
                      className="article-link w-inline-block"
                    >
                      <div className="news-date">
                        <div
                          style={{ backgroundColor: "#32d255" }}
                          className="news-category"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67a98e4f05dce558d931148e_ic-business.svg"
                            loading="lazy"
                            alt="Category Icon"
                          />
                          <div>Politics</div>
                        </div>
                        <div className="divider"></div>
                        <div>Jan 27, 2025</div>
                      </div>
                      <h6 className="headline-title">
                        Trump Wants to Label Antifa a Terror Group. His Real
                        Target Might Be a Lot Bigger.
                      </h6>
                    </a>
                  </div>

                  <div role="listitem" className="article-item w-dyn-item">
                    <a
                      href="/news/sports/soccers-most-expensive"
                      className="article-link w-inline-block"
                    >
                      <div className="news-date">
                        <div
                          style={{ backgroundColor: "#e8493a" }}
                          className="news-category"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67a98e354c0e5867090c3355_ic-sports.svg"
                            loading="lazy"
                            alt="Category Icon"
                          />
                          <div>Sports</div>
                        </div>
                        <div className="divider"></div>
                        <div>Jan 27, 2025</div>
                      </div>
                      <h6 className="headline-title">
                        Soccer's Most Expensive Transfers: Isak Joins Neymar,
                        Mbappé in Top 5
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Categories (exactly like OG) */}
          <CategoriesSection />
        </div>
      </div>
    </section>
  );
}
