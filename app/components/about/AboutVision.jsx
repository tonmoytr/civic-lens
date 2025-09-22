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
              src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67971cf0563f444a3e74f273_vision-01.jpg"
            />
          </div>
          <div className="vision-img">
            <img
              className="vision-image"
              loading="lazy"
              alt="Vision Image"
              src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/67971cf022c1010fbebf1537_vision-02.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
