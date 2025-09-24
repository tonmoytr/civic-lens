import AdvertiseSection from "@/app/components/home/AdvertiseSection";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import { allPostsFlat, getPost } from "@/data/newes";
import Link from "next/link";
import { notFound } from "next/navigation";

function formatDateToMMMDDYYYY(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr?.toUpperCase?.() || "";
  const m = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = d.getDate();
  const y = d.getFullYear();
  return `${m} ${day < 10 ? "0" + day : day}, ${y}`;
}

export function generateStaticParams() {
  return allPostsFlat().map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params; // <-- await params
  const post = getPost(category, slug);
  if (!post) return { title: "Article • Civic Lens" };
  return {
    title: `${post.title} • Civic Lens`,
    description: post.excerpt || `${post.category} — ${post.date}`,
  };
}

export default async function ArticlePage({ params }) {
  const { category, slug } = await params; // <-- await params
  const post = getPost(category, slug);
  if (!post) return notFound();

  const dateLabel = formatDateToMMMDDYYYY(post.date);
  const blocks = Array.isArray(post.content)
    ? post.content
    : post.content
    ? [post.content]
    : [];

  return (
    <>
      <Navbar />
      <main className="article-page container">
        <div className="article-wrap">
          <figure className="article-media">
            <img
              src={post.image || "/images/news/placeholder-16x9.jpg"}
              alt=""
            />
          </figure>

          <h1 className="article-title">{post.title}</h1>

          <div className="article-meta">
            <span className="article-cat">{post.category}</span>
            <span className="article-sep">—</span>
            <span className="article-date">{dateLabel}</span>
          </div>

          <section className="article-body">
            {blocks.length ? (
              blocks.map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p>
                Add a <code>content</code> field (string or array) to this post
                in your JSON.
              </p>
            )}
          </section>

          <div className="article-back">
            <Link href={`/news/${category}`}>
              &larr; Back to {post.category}
            </Link>
          </div>
        </div>
        <AdvertiseSection />
      </main>
      <Footer />
    </>
  );
}
