export default function EditorialTeam() {
  return (
    <section className="author">
      <div className="w-layout-blockcontainer container w-container">
        {/* Title + View All */}
        <div className="section-title">
          <h2 className="single-title">Our Editorial Team</h2>
          <a href="/authors" className="secondary-button w-inline-block">
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

        {/* Team list (3 items) */}
        <div className="w-dyn-list">
          <div role="list" className="author-list w-dyn-items">
            {/* Marvin McKinney */}
            <div role="listitem" className="author-item w-dyn-item">
              <a
                href="/news-author/marvin-mckinney"
                className="author-block w-inline-block"
              >
                <div className="author-img">
                  <img
                    className="author-image"
                    loading="lazy"
                    alt="Author Image"
                    sizes="(max-width: 767px) 44vw, (max-width: 991px) 30vw, 31vw"
                    srcSet="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946adf695cfbd6d241e25d_author-thumb-01-p-500.jpg 500w, https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946adf695cfbd6d241e25d_author-thumb-01-p-800.jpg 800w, https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946adf695cfbd6d241e25d_author-thumb-01.jpg 824w"
                    src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946adf695cfbd6d241e25d_author-thumb-01.jpg"
                  />
                </div>
                <div className="author-data">
                  <h5 className="author-name">Marvin McKinney</h5>
                  <div className="author-role">Senior Reporter</div>
                </div>
              </a>
            </div>

            {/* Theresa Webb */}
            <div role="listitem" className="author-item w-dyn-item">
              <a
                href="/news-author/theresa-webb"
                className="author-block w-inline-block"
              >
                <div className="author-img">
                  <img
                    className="author-image"
                    loading="lazy"
                    alt="Author Image"
                    sizes="(max-width: 767px) 44vw, (max-width: 991px) 30vw, 31vw"
                    srcSet="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946b1b75a0e95bb4542812_author-thumb-02-p-500.jpg 500w, https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946b1b75a0e95bb4542812_author-thumb-02-p-800.jpg 800w, https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946b1b75a0e95bb4542812_author-thumb-02.jpg 824w"
                    src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946b1b75a0e95bb4542812_author-thumb-02.jpg"
                  />
                </div>
                <div className="author-data">
                  <h5 className="author-name">Theresa Webb</h5>
                  <div className="author-role">Publisher</div>
                </div>
              </a>
            </div>

            {/* Esther Howards */}
            <div role="listitem" className="author-item w-dyn-item">
              <a
                href="/news-author/esther-howards"
                className="author-block w-inline-block"
              >
                <div className="author-img">
                  <img
                    className="author-image"
                    loading="lazy"
                    alt="Author Image"
                    sizes="(max-width: 767px) 44vw, (max-width: 991px) 30vw, 31vw"
                    srcSet="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946b3c9cc3c0bf31134c37_author-thumb-03-p-500.jpg 500w, https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946b3c9cc3c0bf31134c37_author-thumb-03-p-800.jpg 800w, https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946b3c9cc3c0bf31134c37_author-thumb-03.jpg 824w"
                    src="https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67946b3c9cc3c0bf31134c37_author-thumb-03.jpg"
                  />
                </div>
                <div className="author-data">
                  <h5 className="author-name">Esther Howards</h5>
                  <div className="author-role">Content Writer</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
