"use client";

export default function Advertisements({
  title = "ADVERTISE",
  sections = [
    {
      heading: "Marketing Solutions",
      paragraphs: [
        `Amet amet ut egestas est mauris cursus imperdiet tincidunt. Nunc in quisque lectus eu a tempus gravida enim. Cursus amet habitant nulla in. Consequat magna sed justo amet molestie.`,
        `Libero diam diam sed sem orci elit vitae. Eget eleifend consectetur quis fames. Et quis malesuada tristique nisl porttitor. Aenean aliquam odio elementum pellentesque est amet at.`,
        `Amet sit dignissim consequat et fermentum cras ipsum tortor. Tempus enim at et vestibulum viverra volutpat sollicitudin. Ac massa quisque habitant quis nec habitant nisi venenatis.`,
      ],
    },
    {
      heading: "Advertising",
      paragraphs: [
        `Sed feugiat porta egestas facilisi arcu orci diam suscipit metus. Eu arcu leo vel lorem fusce amet duis proin. Id risus quis ut consectetur. Donec cras sagittis purus et sollicitudin orci pharetra sed tortor.`,
      ],
    },
    {
      heading: "Email Newsletter Sponsorship",
      paragraphs: [
        `Diam risus suspendisse purus pellentesque id varius eget dui augue. Nunc ut viverra lectus tristique scelerisque sodales egestas facilisis eget. Donec nec mauris commodo nibh convallis egestas cursus iaculis sed.`,
      ],
    },
  ],
}) {
  return (
    <section className="adv-text container">
      <div className="adv-container">
        <h1 style={{ paddingTop: "3%" }} className="adv-title">
          {title}
        </h1>

        <div style={{ padding: "3% 0" }} className="adv-copy">
          {sections.map((sec) => (
            <article
              style={{ padding: "3% 0" }}
              className="adv-block"
              key={sec.heading}
            >
              <h3 className="adv-heading">{sec.heading}</h3>
              {sec.paragraphs.map((p, i) => (
                <p className="adv-paragraph" key={i}>
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
