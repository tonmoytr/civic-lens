export default function PodcastGrid() {
  const items = [
    {
      href: "/podcast/beyond-the-mic-transformative-ideas-powerful-voices-endless-inspiration",
      author: "Guy Hawkins",
      title:
        "Beyond the mic transformative ideas, powerful voices, endless inspiration",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679750df5b546fe28efbe036_podcast-thumb-02.jpg",
    },
    {
      href: "/podcast/conversations-beyond-borders-insights-ideas-and-inspiring-journeys",
      author: "Marvin McKinney",
      title:
        "Conversations beyond borders insights, ideas and inspiring journeys",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679750a9e2f6c58a9aeb2033_podcast-thumb-01.jpg",
    },
    {
      href: "/podcast/the-change-makers-inspiring-stories-of-transformation-and-resilience",
      author: "Kristin Watson",
      title:
        "The change makers inspiring stories of transformation and resilience",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679751a2c498f5490b5978bb_podcast-thumb-06.jpg",
    },
    {
      href: "/podcast/the-curious-mind-unpacking-the-world-around-us",
      author: "Leslie Alexander",
      title: "The curious mind unpacking the world around us",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67947dc130bb4856c1d1fc32_67932d90c97e1d2721ccecf0_media-1.jpeg",
    },
    {
      href: "/podcast/cultural-chronicles-stories-from-around-the-globe",
      author: "Esther Howards",
      title: "Cultural chronicles stories from around the globe",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67947dc13fefb7344012baaa_67932d90c97e1d2721ccecfa_media-2.jpeg",
    },
    {
      href: "/podcast/thoughts-that-inspire-conversations-to-spark-curiosity-and-action",
      author: "Theresa Webb",
      title:
        "Thoughts that inspire conversations to spark curiosity and action",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67947dc130bb4856c1d1fc32_67932d90c97e1d2721ccecf0_media-1.jpeg",
    },
  ];

  return (
    <section className="podcast podcast-page">
      {/* <-- page scope */}
      <div className="container">
        {/* drop w-layout-blockcontainer / w-container */}
        <div className="podcast-grid">
          <div className="w-dyn-list">
            <div role="list" className="podcast-list w-dyn-items">
              {items.map((p) => (
                <div
                  role="listitem"
                  className="podcast-item w-dyn-item"
                  key={p.href}
                >
                  <a href={p.href} className="podcast-link w-inline-block">
                    <img
                      className="podcast-image"
                      alt="Podcast Image"
                      loading="lazy"
                      src={p.img}
                    />
                    <div className="podcast-data">
                      <div>
                        <div className="podcast-author">{p.author}</div>
                        <h3 className="podcast-title">{p.title}</h3>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
