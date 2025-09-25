export default function AboutHero() {
  return (
    <section className="about">
      {/* Top title block */}
      <div className="page-title">
        <div className="w-layout-blockcontainer container w-container">
          <h1 className="about-title">A closer look at our story</h1>
          <p className="about-us-text">
            From humble beginnings to where we stand today, our story is one of
            passion, perseverance, and purpose. What started as a simple idea
            has blossomed into a remarkable journey filled with milestones,
            challenges, and triumphs
          </p>
        </div>
      </div>

      {/* Banner image */}
      <div className="w-layout-blockcontainer container w-container">
        <div className="about-us-img">
          <img
            src="/assets/images/about/meeting.jpg"
            loading="eager"
            sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 97vw"
            
            alt="About Image"
            className="about-us-image"
          />
        </div>
      </div>
    </section>
  );
}
