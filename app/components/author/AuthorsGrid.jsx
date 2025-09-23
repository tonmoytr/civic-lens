"use client";

import { allAuthors } from "@/data/authors";
import Image from "next/image";
import Link from "next/link";

export default function AuthorsGrid() {
  const authors = allAuthors();

  return (
    <section className="authors">
      <div className="w-layout-blockcontainer container w-container">
        <div className="author-list w-dyn-items">
          {authors.map((a) => (
            <div
              className="author-item w-dyn-item"
              role="listitem"
              key={a.slug}
            >
              <Link
                className="author-block w-inline-block"
                href={`/authors/${a.slug}`}
              >
                <div className="author-img">
                  <div className="author-image-wrap">
                    <Image
                      className="author-image"
                      src={a.image}
                      alt={a.name}
                      fill
                      sizes="(min-width:1024px) 25vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="author-data">
                  <div className="author-name">{a.name}</div>
                  <div className="author-role">{a.role}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
