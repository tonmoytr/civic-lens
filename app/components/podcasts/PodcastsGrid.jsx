// /components/PodcastsGrid.jsx
"use client";

import { getAllPodcasts } from "@/data/podcasts";
import Image from "next/image";
import Link from "next/link";

export default function PodcastGrid() {
  const items = getAllPodcasts();

  return (
    <section className="podcast podcast-page">
      <div className="container">
        <div className="podcast-grid">
          <div className="w-dyn-list">
            <div role="list" className="podcast-list w-dyn-items">
              {items.map((p) => (
                <div
                  role="listitem"
                  className="podcast-item w-dyn-item"
                  key={p.slug}
                >
                  <Link
                    href={`/podcast/${p.slug}`}
                    className="podcast-link w-inline-block"
                  >
                    {/* Image wrapper needs position:relative for Image fill */}
                    <div className="podcast-image-wrap">
                      <Image
                        className="podcast-image"
                        src={p.image || "/assets/images/podcasts/1.jpg"}
                        alt={p.title}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        style={{ objectFit: "cover" }}
                        priority={false}
                      />
                    </div>
                    <div className="podcast-data">
                      <div>
                        <div className="podcast-author">{p.authorName}</div>
                        <h3 className="podcast-title">{p.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
