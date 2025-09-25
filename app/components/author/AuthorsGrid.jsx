// app/_components/TeamDirectory.jsx
"use client";

import { allAuthors } from "@/data/authors";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

/**
 * Category rules:
 * - If an author JSON has a "category" field, we respect it.
 * - Otherwise we infer it from the "role" using the map below.
 */
const ROLE_TO_CATEGORY = [
  { match: /editor|chief|managing/i, category: "Editorial" },
  { match: /reporter|journalist|writer/i, category: "Editorial" },
  { match: /copy\s*editor|fact[- ]?checker/i, category: "Editorial" },

  { match: /photo|video|videographer|camera|producer/i, category: "Media & Visuals" },
  { match: /designer|graphics?|illustrator/i, category: "Media & Visuals" },

  { match: /social|audience|community|growth|seo/i, category: "Distribution & Growth" },
  { match: /web|site|developer|engineer|manager/i, category: "Distribution & Growth" },

  { match: /business|ops|operation|publisher|partnership|sales|ads?/i, category: "Business & Ops" },
];

const CATEGORY_ORDER = ["Editorial", "Media & Visuals", "Distribution & Growth", "Business & Ops"];

function resolveCategory(a) {
  if (a.category && a.category.trim()) return a.category;
  const role = a.role || "";
  const found = ROLE_TO_CATEGORY.find((r) => r.match.test(role));
  return found ? found.category : "Editorial";
}

export default function AuthorsGrid() {
  const authors = allAuthors();

  // group into { [category]: Array<author> }
  const grouped = useMemo(() => {
    const byCat = new Map();
    for (const a of authors) {
      const cat = resolveCategory(a);
      if (!byCat.has(cat)) byCat.set(cat, []);
      byCat.get(cat).push(a);
    }
    // sort each category by seniority-like hint in role
    for (const [cat, list] of byCat) {
      list.sort((x, y) => {
        const seniority = (s = "") =>
          /editor-in-chief|managing editor|senior|publisher|director/i.test(s) ? 0 :
          /editor|lead|producer|manager/i.test(s) ? 1 : 2;
        const ax = seniority(x.role);
        const ay = seniority(y.role);
        return ax - ay || (x.name || "").localeCompare(y.name || "");
      });
      byCat.set(cat, list);
    }
    return byCat;
  }, [authors]);

  return (
    <section className="team">
      <div className="w-layout-blockcontainer container w-container">
        {/* Header */}
        <div className="team-header">
          <h2 className="team-title">Our Team</h2>
          <p className="team-subtitle">
            Meet the people behind the stories — organized by specialty so your readers (and your future component)
            can scan by function.
          </p>
        </div>

        {/* Categories */}
        {CATEGORY_ORDER.filter((c) => grouped.has(c)).map((category) => {
          const list = grouped.get(category) || [];
          return (
            <div className="team-section" key={category}>
              <div className="team-section-head">
                <h3 className="team-section-title">{category}</h3>
                <span className="team-section-count">{list.length}</span>
              </div>

              <div className="team-grid">
                {list.map((a) => (
                  <article className="team-card" key={a.slug}>
                    <Link className="team-card-link" href={`/authors/${a.slug}`}>
                      <div className="team-avatar">
                        <div className="team-avatar-wrap">
                          <Image
                            className="team-avatar-img"
                            src={a.image}
                            alt={a.name}
                            fill
                            sizes="(min-width:1024px) 20vw, 50vw"
                            style={{ objectFit: "cover" }}
                            priority={false}
                          />
                        </div>
                      </div>
                      <div className="team-meta">
                        <h4 className="team-name">{a.name}</h4>
                        <p className="team-role">{a.role}</p>
                        {/* Optional short bio preview if present */}
                        {a.bio ? <p className="team-bio">{a.bio}</p> : null}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
