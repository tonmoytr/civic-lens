export default function PodcastSection() {
  return (
    <section className="podcast">
      <div className="w-layout-blockcontainer container w-container">
        {/* Title + View All */}
        <div className="section-title">
          <h2 className="single-title">Podcast</h2>
          <a
            data-w-id="f12a1433-83be-c0f0-127b-f40c039a2126"
            href="/podcast"
            className="secondary-button w-inline-block"
          >
            <div
              style={{
                border: "1px solid black;",
                borderRadius: "9px;",
                padding: "7px 18px",
              }}
            >
              View All <span aria-hidden>→</span>
            </div>
            {/* <img
              loading="lazy"
              alt="Arrow"
              src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/679325bd8b8c42f40706a8af_dd55803183fe032b44b49869d93eba77_ic-arrow.svg"
              className="arrow"
            /> */}
          </a>
        </div>

        <div className="podcast-wrap">
          {/* Feature Podcast (left) */}
          <div className="feature-podcast w-dyn-list">
            <div role="list" className="fp-list w-dyn-items">
              <div role="listitem" className="fp-item w-dyn-item">
                <a
                  data-w-id="fdffe208-4d25-567e-4e73-8d4e9e5f0727"
                  href="/podcast/conversations-beyond-borders-insights-ideas-and-inspiring-journeys"
                  className="fp-link w-inline-block"
                >
                  <img
                    src="/assets/images/podcasts/5.jpg"
                    loading="lazy"
                    alt="Podcast Image"
                    sizes="(max-width: 479px) 92vw, (max-width: 991px) 95vw, 57vw"
                    className="fp-image"
                  />
                  <div className="fp-data">
                    <div className="podcast-min">10 Minute</div>
                    <div>
                      <div className="podcast-author">Marvin McKinney</div>
                      <h3 className="fp-title">
                        Conversations beyond borders insights, ideas and
                        inspiring journeys
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Other Podcasts (right) */}
          <div className="podcasts">
            <div className="w-dyn-list">
              <div role="list" className="podcast-lists w-dyn-items">
                {/* Item 1 */}
                <div role="listitem" className="podcast-item w-dyn-item">
                  <a
                    data-w-id="cf33d4b0-3f32-a188-3d4c-564004a248e7"
                    href="/podcast/beyond-the-mic-transformative-ideas-powerful-voices-endless-inspiration"
                    className="podcast-link w-inline-block"
                  >
                    <img
                      src="/assets/images/podcasts/4.jpg"
                      loading="lazy"
                      alt="Podcast Image"
                      sizes="(max-width: 767px) 92vw, (max-width: 991px) 46vw, 39vw"
                      className="podcast-image"
                    />
                    <div className="podcast-data">
                      <div>
                        <div className="podcast-author">Guy Hawkins</div>
                        <h3 className="podcast-title">
                          Beyond the mic transformative ideas, powerful voices,
                          endless inspiration
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Item 2 */}
                <div role="listitem" className="podcast-item w-dyn-item">
                  <a
                    href="/podcast/the-change-makers-inspiring-stories-of-transformation-and-resilience"
                    className="podcast-link w-inline-block"
                  >
                    <img
                      src="/assets/images/podcasts/6.jpg"
                      loading="lazy"
                      alt="Podcast Image"
                      sizes="(max-width: 767px) 92vw, (max-width: 991px) 46vw, 39vw"
                      className="podcast-image"
                    />
                    <div className="podcast-data">
                      <div>
                        <div className="podcast-author">Kristin Watson</div>
                        <h3 className="podcast-title">
                          The change makers inspiring stories of transformation
                          and resilience
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
