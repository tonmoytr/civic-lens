export default function NewsGrid() {
  const items = [
    {
      href: "/news/adapting-business-strategies-to-meet-changing-demands",
      category: "politics",
      date: "Feb 10, 2025",
      title: "Adapting business strategies to meet changing demands",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67947eaa9d9e3571bda4252b_news-main-07.jpg",
    },
    {
      href: "/news/smart-homes-revolution-how-iot-is-transforming-living-spaces",
      category: "Technology",
      date: "Feb 10, 2025",
      title: "Smart homes revolution how iot is transforming living spaces",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679481dd9545deb12b358576_news-main-23.jpg",
    },
    {
      href: "/news/the-power-of-art-in-connecting-and-expressing-cultural",
      category: "Culture",
      date: "Jan 27, 2025",
      title: "The power of art in connecting and expressing cultural",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679480272556a4d768e11482_news-main-16.jpg",
    },
    {
      href: "/news/how-artificial-intelligence-machine-learning-are-changing-the-field",
      category: "Health News",
      date: "Jan 27, 2025",
      title:
        "How artificial intelligence & machine learning are changing the field",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67947fb67b79cc388c85a893_news-main-12.jpg",
    },
    {
      href: "/news/the-influence-of-youth-sports-programs-on-developing-future-champions",
      category: "Sports",
      date: "Jan 27, 2025",
      title:
        "The influence of youth sports programs on developing future champions",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67947f999d9e3571bda49410_news-main-11.jpg",
    },
    {
      href: "/news/hosting-major-sporting-events-on-local-global-scales",
      category: "Sports",
      date: "Jan 25, 2025",
      title: "Hosting major sporting events on local & global scales",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67947f77ddde9f4bb0c9605f_news-main-10.jpg",
    },
    {
      href: "/news/future-focused-an-in-depth-look-at-cutting-edge-tech-trends",
      category: "Technology",
      date: "Jan 25, 2025",
      title: "Future-focused an in-depth look at cutting-edge tech trends",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/6794837850cd96fa6b983c01_news-main-30.jpg",
    },
    {
      href: "/news/the-future-of-5g-connecting-a-world-at-lightning-speed",
      category: "Technology",
      date: "Jan 25, 2025",
      title: "The future of 5G connecting a world at lightning speed",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/6794823684309048ad791366_news-main-26.jpg",
    },
    {
      href: "/news/women-in-sports-celebrating-trailblazers-and-achievements",
      category: "politics",
      date: "Jan 25, 2025",
      title: "Women in sports celebrating trailblazers and achievements",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/6794821684309048ad790878_news-main-25.jpg",
    },
  ];

  return (
    <section className="news">
      <div className="w-layout-blockcontainer container w-container">
        {/* Grid */}
        <div role="list" className="news-list w-dyn-items">
          {items.map((n) => (
            <div role="listitem" className="news-item w-dyn-item" key={n.href}>
              <a className="news-link w-inline-block" href={n.href}>
                <div className="news-img">
                  <img
                    className="news-image"
                    loading="lazy"
                    alt="News Image"
                    src={n.img}
                  />
                </div>
                <div className="news-data">
                  <div className="news-date">
                    <a
                      href={`/news-categories/${n.category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {n.category}
                    </a>
                    <div className="divider"></div>
                    <div>{n.date}</div>
                  </div>
                  <h5 className="news-title">{n.title}</h5>
                  <div className="secondary-button">
                    Read More
                    <img
                      loading="lazy"
                      alt="Arrow"
                      src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/679324e9f99e50c8f730cd26_ic-arrow-right.svg"
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
