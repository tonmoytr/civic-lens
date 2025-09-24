export default function LatestNews() {
  return (
    <section className="latest-news">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-title">
          <h2 className="single-title">Latest News</h2>
          <a
            href="/news"
            className="secondary-button w-inline-block"
            data-w-id="6d3093a3-322f-1fb1-6fef-327add252af6"
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

        <div className="news-wrap">
          {/* LEFT: Feature news (2 cards) */}
          <div className="news-left">
            <div className="w-dyn-list">
              <div className="feature-news-list w-dyn-items" role="list">
                <div className="feature-news-item w-dyn-item" role="listitem">
                  <a
                    href="/news/technology/proton-mail-suspended"
                    className="feature-news-link w-inline-block"
                    data-w-id="6d3093a3-322f-1fb1-6fef-327add252af8"
                  >
                    <div className="feature-news-img">
                      <img
                        className="feature-news-image"
                        loading="lazy"
                        alt="News Image"
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 35vw"
                        src="/assets/images/tech/tech2.webp"
                      />
                    </div>
                    <div className="feature-news-data">
                      <div className="news-date">
                        <div>Technology</div>
                        <div className="divider"></div>
                        <div>Jan 25, 2025</div>
                      </div>
                      <h5 className="feature-news-title">
                        Future-focused an in-depth look at cutting-edge tech
                        trends
                      </h5>
                    </div>
                  </a>
                </div>

                <div className="feature-news-item w-dyn-item" role="listitem">
                  <a
                    href="/news/world-news/mit-professor-cancels"
                    className="feature-news-link w-inline-block"
                    data-w-id="6d3093a3-322f-1fb1-6fef-327add252afa"
                  >
                    <div className="feature-news-img">
                      <img
                        className="feature-news-image"
                        loading="lazy"
                        alt="News Image"
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 35vw"
                        src="/assets/images/politics/top.webp"
                      />
                    </div>
                    <div className="feature-news-data">
                      <div className="news-date">
                        <div>World News</div>
                        <div className="divider"></div>
                        <div>Sept 23, 2025</div>
                      </div>
                      <h5 className="feature-news-title">
                        MIT Professor Cancels Israeli Military Grant After
                        Student Pressure
                      </h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Blog list (3 items) */}
          <div className="news-right">
            <div className="w-dyn-list">
              <div className="blog-list w-dyn-items" role="list">
                <div className="blog-item w-dyn-item" role="listitem">
                  <a
                    href="/news/world-news/data-shows-political-violence"
                    className="blog-link w-inline-block"
                    data-w-id="6d3093a3-322f-1fb1-6fef-327add252afc"
                  >
                    <div className="blog-img">
                      <img
                        className="blog-image"
                        loading="lazy"
                        alt="News Image"
                        sizes="(max-width: 479px) 92vw, (max-width: 991px) 28vw, 23vw"
                        src="/assets/images/politics/data.webp"
                      />
                    </div>
                    <div className="blog-data">
                      <div className="news-date">
                        <div>Politics</div>
                        <div className="divider"></div>
                        <div>Sept 17, 2025</div>
                      </div>
                      <h6 className="blog-title">
                        The Data Shows Political Violence Is Actually Down
                      </h6>
                    </div>
                  </a>
                </div>

                <div className="blog-item w-dyn-item" role="listitem">
                  <a
                    href="/news/technology/goolge-security-handed-ice"
                    className="blog-link w-inline-block"
                    data-w-id="6d3093a3-322f-1fb1-6fef-327add252afe"
                  >
                    <div className="blog-img">
                      <img
                        className="blog-image"
                        loading="lazy"
                        alt="News Image"
                        sizes="(max-width: 479px) 92vw, (max-width: 991px) 28vw, 23vw"
                        srcSet="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679481dbfdb5af29738f15bf_news-thumb-23-p-500.jpg 500w, https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679481dbfdb5af29738f15bf_news-thumb-23-p-800.jpg 800w, https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679481dbfdb5af29738f15bf_news-thumb-23.jpg 824w"
                        src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679481dbfdb5af29738f15bf_news-thumb-23.jpg"
                      />
                    </div>
                    <div className="blog-data">
                      <div className="news-date">
                        <div>Technology</div>
                        <div className="divider"></div>
                        <div>Feb 10, 2025</div>
                      </div>
                      <h6 className="blog-title">
                        Smart homes revolution how iot is transforming living
                        spaces
                      </h6>
                    </div>
                  </a>
                </div>

                <div className="blog-item w-dyn-item" role="listitem">
                  <a
                    href="/news/culture/power-of-art"
                    className="blog-link w-inline-block"
                    data-w-id="6d3093a3-322f-1fb1-6fef-327add252b00"
                  >
                    <div className="blog-img">
                      <img
                        className="blog-image"
                        loading="lazy"
                        alt="News Image"
                        sizes="(max-width: 479px) 92vw, (max-width: 991px) 28vw, 23vw"
                        srcSet="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67948025d1fcfa10bf1986f3_news-thumb-16-p-500.jpg 500w, https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67948025d1fcfa10bf1986f3_news-thumb-16-p-800.jpg 800w, https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67948025d1fcfa10bf1986f3_news-thumb-16.jpg 824w"
                        src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67948025d1fcfa10bf1986f3_news-thumb-16.jpg"
                      />
                    </div>
                    <div className="blog-data">
                      <div className="news-date">
                        <div>Culture</div>
                        <div className="divider"></div>
                        <div>Jan 27, 2025</div>
                      </div>
                      <h6 className="blog-title">
                        The power of art in connecting and expressing cultural
                      </h6>
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
