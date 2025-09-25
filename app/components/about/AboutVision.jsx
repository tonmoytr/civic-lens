export default function AboutVision() {
  return (
    <section className="our-vision">
      <div className="w-layout-blockcontainer container w-container">
        {/* Title + copy */}
        <div className="vision-data">
          <h2 className="single-title vision-title">Driven by shared goals</h2>
          <p>
            We are committed to a mission of delivering impactful solutions that
            empower individuals and communities, while staying true to our
            values of excellence, integrity, and collaboration.
          </p>
        </div>

        {/* Side-by-side images */}
        <div className="vision-images">
          <div className="vision-img">
            <img
              className="vision-image"
              loading="lazy"
              alt="Vision Image"
              src="/assets/images/about/vis.webp"
            />
          </div>
          <div className="vision-img">
            <img
              className="vision-image"
              loading="lazy"
              alt="Vision Image"
              src="/assets/images/about/vis.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
