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
              View All  <span aria-hidden>→</span>
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
                href="http://localhost:3000/authors/david"
                className="author-block w-inline-block"
              >
                <div className="author-img">
                  <img
                    className="author-image"
                    loading="lazy"
                    alt="Author Image"
                    sizes="(max-width: 767px) 44vw, (max-width: 991px) 30vw, 31vw"
                    src="/assets/images/authors/david.jpg"
                  />
                </div>
                <div className="author-data">
                  <h5 className="author-name">David Klein</h5>
                  <div className="author-role">Senior Reporter</div>
                </div>
              </a>
            </div>

            {/* Theresa Webb */}
            <div role="listitem" className="author-item w-dyn-item">
              <a
                href="http://localhost:3000/authors/theresa"
                className="author-block w-inline-block"
              >
                <div className="author-img">
                  <img
                    className="author-image"
                    loading="lazy"
                    alt="Author Image"
                    sizes="(max-width: 767px) 44vw, (max-width: 991px) 30vw, 31vw"
                  
                    src="/assets/images/authors/theresa.jpg"
                  />
                </div>
                <div className="author-data">
                  <h5 className="author-name">Theresa Gomez</h5>
                  <div className="author-role">Publisher</div>
                </div>
              </a>
            </div>

            {/* Esther Howards */}
            <div role="listitem" className="author-item w-dyn-item">
              <a
                href="http://localhost:3000/authors/elisa"
                className="author-block w-inline-block"
              >
                <div className="author-img">
                  <img
                    className="author-image"
                    loading="lazy"
                    alt="Author Image"
                    sizes="(max-width: 767px) 44vw, (max-width: 991px) 30vw, 31vw"
                    
                    src="/assets/images/authors/w.jpg"
                  />
                </div>
                <div className="author-data">
                  <h5 className="author-name">Elisa McKinney</h5>
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
