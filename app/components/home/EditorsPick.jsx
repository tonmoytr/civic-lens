export default function EditorsPick() {
  return (
    <div className="page-data">
      <section className="editor-pick">
        <div className="w-layout-blockcontainer container w-container">
          <div className="editor-wrap">
            {/* Left: Titles + Links */}
            <div className="editor-left">
              <div>
                <div className="editor-sub-title">Stories That Matter</div>
                <h3 className="editor-heading">Editor's Pick</h3>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="editor-pick-list w-dyn-items">
                  <div role="listitem" className="editor-pick-item w-dyn-item">
                    <a
                      href="/news/the-power-of-art-in-connecting-and-expressing-cultural"
                      className="editor-pick-link w-inline-block"
                    >
                      <div className="sub-text">Culture</div>
                      <h5 className="editor-pick-title">
                        The power of art in connecting and expressing cultural
                      </h5>
                    </a>
                  </div>

                  <div role="listitem" className="editor-pick-item w-dyn-item">
                    <a
                      href="/news/how-artificial-intelligence-machine-learning-are-changing-the-field"
                      className="editor-pick-link w-inline-block"
                    >
                      <div className="sub-text">Health News</div>
                      <h5 className="editor-pick-title">
                        How artificial intelligence &amp; machine learning are
                        changing the field
                      </h5>
                    </a>
                  </div>

                  <div role="listitem" className="editor-pick-item w-dyn-item">
                    <a
                      href="/news/the-influence-of-youth-sports-programs-on-developing-future-champions"
                      className="editor-pick-link w-inline-block"
                    >
                      <div className="sub-text">Sports</div>
                      <h5 className="editor-pick-title">
                        The influence of youth sports programs on developing
                        future champions
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div
              data-w-id="2391630d-7b0a-bfc3-0133-ca608511a360"
              className="editor-img"
            >
              <img
                src="/assets/images/home/editor.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 92vw, (max-width: 991px) 95vw, 57vw"
                className="editor-image"
              />
              <div style={{ display: "block" }} className="on-scroll"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
