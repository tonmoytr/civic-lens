import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import { allPodcastSlugs, getPodcast } from "@/data/podcasts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr || "";
  return d
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
    .toUpperCase();
}

export function generateStaticParams() {
  return allPodcastSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPodcast(slug);
  if (!p) return { title: "Podcast • Civic Lens" };
  return {
    title: `${p.title} • Civic Lens`,
    description:
      p.description || `${p.authorName} — ${p.duration || ""}`.trim(),
  };
}

export default async function PodcastPage({ params }) {
  const { slug } = await params; // Next 15: params is async
  const p = getPodcast(slug);
  if (!p) return notFound();

  return (
    <>
      <Navbar />
      <div className="container">
        <main className="podcast-article">
          <div className="podcast-article-wrap">
            {/* Hero / cover */}
            <figure className="podcast-hero">
              <Image
                src={p.image || "/images/podcast-placeholder-16x9.jpg"}
                alt={p.title}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </figure>

            {/* Title */}
            <h1 className="podcast-title-lg">{p.title}</h1>

            {/* Meta */}
            <div className="podcast-meta">
              <span className="podcast-meta-author">
                {p.authorSlug ? (
                  <Link href={`/news-author/${p.authorSlug}`}>
                    {p.authorName}
                  </Link>
                ) : (
                  p.authorName
                )}
              </span>
              {p.date && (
                <>
                  {" "}
                  <span className="podcast-dot">•</span>{" "}
                  <span className="podcast-date">{formatDate(p.date)}</span>{" "}
                </>
              )}
              {p.duration && (
                <>
                  {" "}
                  <span className="podcast-dot">•</span>{" "}
                  <span className="podcast-duration">{p.duration}</span>{" "}
                </>
              )}
            </div>

            {/* Player (optional) */}
            {p.audioSrc ? (
              <div className="podcast-player">
                <audio controls preload="none" src={p.audioSrc} />
              </div>
            ) : null}

            {/* Description */}
            {p.description ? (
              <p className="podcast-desc">{p.description}</p>
            ) : null}

            {/* Body */}
            <section className="podcast-body">
              {(Array.isArray(p.content)
                ? p.content
                : p.content
                ? [p.content]
                : []
              ).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </section>

            {/* Back */}
            <div className="podcast-back">
              <Link href="/podcast">&larr; Back to Podcasts</Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
