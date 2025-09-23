export default function AboutStory() {
  return (
    <section className="about-us">
      <div className="w-layout-blockcontainer container w-container">
        <div className="about-wrapper">
          {/* Reverse row: large image on the left, copy on the right */}
          <div className="about-wrap reverse">
            <div
              className="about-img"
              data-w-id="bd53cf8c-89b0-b6fc-e539-1cbb3bxxxxxx"
            >
              <img
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67971248951f938a35159642_about-us.jpg"
                loading="lazy"
                alt="About Image"
                className="about-image"
              />
              <div className="on-scroll" style={{ display: "block" }} />
            </div>

            <div className="">
              <p className="about-text">
                When purpose becomes the core of success, it transforms the way
                individuals and organizations operate. Purpose acts as a
                compass, guiding teams toward meaningful objectives.
              </p>
              <br /> <br />
              <p className="about-text">
                When our Civic organizations and leaders stay true to their core
                beliefs and consistently translate them into meaningful actions,
                they build trust, credibility, and loyalty. Aligning values with
                actions fosters a culture of integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
