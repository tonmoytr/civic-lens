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
            src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67970f44cbc4849c830e5215_about.jpg"
            loading="eager"
            sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 97vw"
            srcSet="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67970f44cbc4849c830e5215_about-p-500.jpg 500w, https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67970f44cbc4849c830e5215_about-p-800.jpg 800w, https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67970f44cbc4849c830e5215_about-p-1080.jpg 1080w, https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67970f44cbc4849c830e5215_about-p-1600.jpg 1600w, https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67970f44cbc4849c830e5215_about-p-2000.jpg 2000w, https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67970f44cbc4849c830e5215_about.jpg 2592w"
            alt="About Image"
            className="about-us-image"
          />
        </div>
      </div>
    </section>
  );
}
