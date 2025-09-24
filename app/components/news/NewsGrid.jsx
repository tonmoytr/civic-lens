// /components/news/NewsGrid.jsx
"use client";

import { allPostsFlat } from "@/data/newes";
import Image from "next/image";
import Link from "next/link";

function formatDateToMMMDDYYYY(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr || "";
  const m = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = d.getDate();
  const y = d.getFullYear();
  return `${m} ${day < 10 ? "0" + day : day}, ${y}`;
}

export default function NewsGrid({ limit, sort = "desc" }) {
  const items = allPostsFlat({ sort });
  const list = limit ? items.slice(0, limit) : items;

  return (
    <section className="news">
      <div className="w-layout-blockcontainer container w-container">
        <div role="list" className="news-list w-dyn-items">
          {list.map((n) => {
            const articleHref = `/news/${n.categorySlug}/${n.slug}`;
            const categoryHref = `/news/${n.categorySlug}`;
            const dateLabel = formatDateToMMMDDYYYY(n.date);
            return (
              <div
                role="listitem"
                className="news-item w-dyn-item"
                key={`${n.categorySlug}:${n.slug}`}
              >
                <Link className="news-link w-inline-block" href={articleHref}>
                  <div className="news-img">
                    <Image
                      className="news-image"
                      src={n.image || "/images/news/placeholder-16x9.jpg"}
                      alt={n.title}
                      fill
                      sizes="(min-width:1100px) 33vw, (min-width:640px) 50vw, 100vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="news-data">
                    <div className="news-date">
                      <Link href={categoryHref}>{n.category}</Link>
                      <div className="divider"></div>
                      <div>{dateLabel}</div>
                    </div>
                    <h5 className="news-title">{n.title}</h5>
                    <div className="secondary-button">
                      Read More
                      <span aria-hidden>→</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
