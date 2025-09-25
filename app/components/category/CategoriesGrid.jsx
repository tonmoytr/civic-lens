// app/components/CategoriesGrid.jsx
const CATEGORIES = [
  {
    name: "Politics",
    href: "/news/politics",
    img: "/assets/images/politics/trump.webp",
  },
  {
    name: "World News",
    href: "/news/world-news",
    img: "assets/images/politics/poli.jpg",
  },
  {
    name: "Sports",
    href: "/news/sports",
    img: "/assets/images/sports/ney.webp",
  },
  {
    name: "Culture",
    href: "/news/culture",
    img: "/assets/images/culture/1.jpg",
  },
  {
    name: "Technology",
    href: "/news/technology",
    img: "/assets/images/tech/techh.jpg",
  },
];

export default function CategoriesGrid() {
  return (
    <section className="categories">
      <div className="container">
        <div className="category-list">
          {CATEGORIES.map((c) => (
            <div className="category-item" key={c.name}>
              <a className="category-link" href={c.href}>
                <img
                  className="category-image"
                  src={c.img}
                  alt={`${c.name} Image`}
                  loading="lazy"
                />
                <div className="category-name">
                  <h4 className="category-title">{c.name}</h4>
                  <img
                    className="category-arrow"
                    alt="Arrow"
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/679723e67cb4d6ccd3aeeb7e_ic-arrow-white.svg"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
