import NewsCard from "./NewsCard";

export default function CategoryGrid({ category }) {
  return (
    <section className="news-grid">
      {category.posts.map((p) => (
        <NewsCard key={p.slug} post={p} categorySlug={category.slug} />
      ))}
    </section>
  );
}
