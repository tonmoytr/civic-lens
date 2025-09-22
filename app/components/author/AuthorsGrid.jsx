export default function AuthorsGrid() {
  const authors = [
    {
      href: "/news-author/marvin-mckinney",
      name: "Marvin McKinney",
      role: "Senior Reporter",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679476e9fdb5af297389d272_author-main-01.jpg",
    },
    {
      href: "/news-author/theresa-webb",
      name: "Theresa Webb",
      role: "Publisher",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679476d29cc3c0bf31187160_author-main-02.jpg",
    },
    {
      href: "/news-author/esther-howards",
      name: "Esther Howards",
      role: "Content Writer",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679476c4e8aee4ed44bab56a_author-main-03.jpg",
    },
    {
      href: "/news-author/guy-hawkins",
      name: "Guy Hawkins",
      role: "Journalist",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679476aa1d4fd4654fdc62ad_author-main-04.jpg",
    },
    {
      href: "/news-author/leslie-alexander",
      name: "Leslie Alexander",
      role: "Author",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679476a19545deb12b302754_author-main-05.jpg",
    },
    {
      href: "/news-author/kristin-watson",
      name: "Kristin Watson",
      role: "Senior Writer",
      img: "https://cdn.prod.website-files.com/679326cff0da9589125cbf3f/679472b53fefb734400d3869_author-main-06.jpg",
    },
  ];

  return (
    <section className="authors">
      <div className="w-layout-blockcontainer container w-container">
        <div className="author-list w-dyn-items">
          {authors.map((a) => (
            <div
              className="author-item w-dyn-item"
              role="listitem"
              key={a.href}
            >
              <a className="author-block w-inline-block" href={a.href}>
                <div className="author-img">
                  <img
                    className="author-image"
                    src={a.img}
                    alt="Author Image"
                    loading="lazy"
                  />
                </div>
                <div className="author-data">
                  <div className="author-name">{a.name}</div>
                  <div className="author-role">{a.role}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
