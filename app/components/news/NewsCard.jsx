import Link from "next/link";

function formatDateToMMMDDYYYY(dateStr) {
  // Produces: JAN 27, 2025
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr?.toUpperCase?.() || "";
  const m = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = d.getDate();
  const y = d.getFullYear();
  return `${m} ${day < 10 ? "0" + day : day}, ${y}`;
}

export default function NewsCard({ post, categorySlug }) {
  const dateLabel = formatDateToMMMDDYYYY(post.date);
  const href = `/news/${categorySlug}/${post.slug}`;
  const imgSrc = post.image || "/images/news/placeholder.jpg";

  return (
    <article className="news-card">
      {/* top meta row */}
      <div className="news-card__top">
        <span className="news-card__category">{post.category}</span>
        <span className="news-card__date">{dateLabel}</span>
      </div>

      {/* image */}
      <Link href={href} className="news-card__media" aria-label={post.title}>
        <img src={imgSrc} alt="" />
      </Link>

      {/* title */}
      <h3 className="news-title">
        <Link href={href}>{post.title}</Link>
      </h3>

      {/* footer CTA */}
      <div className="news-more">
        <Link href={href}>
          READ MORE <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
