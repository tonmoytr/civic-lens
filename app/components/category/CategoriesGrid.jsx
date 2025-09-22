// app/components/CategoriesGrid.jsx
const CATEGORIES = [
  {
    name: "Health News",
    href: "/news-categories/health-news",
    img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67970af70fb0795053cc4296_category-thumb-05.jpg",
  },
  {
    name: "World News",
    href: "/news-categories/world-news",
    img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67970afccf5531d40f479ea0_category-thumb-04.jpg",
  },
  {
    name: "Sports",
    href: "/news-categories/sports",
    img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67970b0a2bf33e1c1f2f3510_category-thumb-03.jpg",
  },
  {
    name: "Culture",
    href: "/news-categories/culture",
    img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67970b11d80b838cdf7c01ae_category-thumb-02.jpg",
  },
  {
    name: "Technology",
    href: "/news-categories/technology",
    img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/67970b17710e44061d1a6d7c_category-thumb-01.jpg",
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
