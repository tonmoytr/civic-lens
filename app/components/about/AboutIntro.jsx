export default function AboutIntro() {
  return (
    <section className="about-us">
      <div className="w-layout-blockcontainer container w-container">
        <div className="about-wrapper">
          <div className="about-wrap">
            {/* Left: copy */}
            <div className="about-left">
              <p className="about-text">
                Our journey has been fueled by the unwavering belief that we
                can... story is a testament to the power of collaboration,
                resilience.
              </p>
            </div>

            {/* Right: two stacked images */}
            <div className="about-right">
              <div
                className="about-small-img"
                data-w-id="a13bf86d-7254-07eb-86d4-d4ff7e00ce26"
              >
                <img
                  src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/679712488580cc5db47c91b0_about-01.jpg"
                  loading="lazy"
                  alt="About Image"
                  className="about-image"
                />
                <div className="on-scroll" style={{ display: "block" }}></div>
              </div>

              <div
                className="about-thumb"
                data-w-id="36e1b2f2-74e3-5c7a-a26c-aac1aab329db"
              >
                <img
                  src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/6797124893a1a5e771f373c0_about-02.jpg"
                  loading="lazy"
                  alt="About Image"
                  className="about-image"
                />
                <div className="on-scroll" style={{ display: "block" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
