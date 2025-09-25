// app/components/author/AuthorProfile.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiTwitterXFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

/**
 * Props:
 *  author = {
 *    slug, name, role, image, bio,
 *    location?, joined?, beats?: string[], accolades?: string[],
 *    socials?: { twitter?, linkedin?, website?, email? },
 *    posts?: Array<any>
 *  }
 *
 * Notes:
 * - All optional sections auto-hide if empty.
 * - Works with your enriched JSON files (david, alex, daniel, elisa, etc.).
 * - Uses .authorPro* CSS classes you already added earlier.
 */
export default function AuthorProfile({ author }) {
  const a = normalize(author);

  const stats = useMemo(() => {
    return {
      totalStories: Array.isArray(a.posts) ? a.posts.length : 0,
    };
  }, [a.posts]);

  const initials = useMemo(() => {
    return (a.name || "")
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }, [a.name]);

  const hasImage = Boolean(a.image);

  return (
    <section className="authorPro">
      {/* Banner */}
      <div className="authorPro__banner">
        {/* Avatar */}
        <div className="authorPro__avatar">
          <div className="authorPro__avatarWrap">
            {hasImage ? (
              <Image
                src={a.image}
                alt={a.name || "Author"}
                fill
                sizes="(min-width: 1024px) 240px, 50vw"
                priority
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div className="authorPro__avatarFallback" aria-hidden>
                {initials || "📰"}
              </div>
            )}
          </div>
        </div>

        {/* Head */}
        <div className="authorPro__head">
          {a.name ? <h1 className="authorPro__name">{a.name}</h1> : null}
          {a.role ? <p className="authorPro__role">{a.role}</p> : null}
          {a.bio ? <p className="authorPro__bio">{a.bio}</p> : null}

          {/* Meta pills */}
          <div className="authorPro__meta">
            {a.location ? <span className="pill">📍 {a.location}</span> : null}
            {a.joined ? (
              <span className="pill">🗓️ Joined {a.joined}</span>
            ) : null}
            <span className="pill">
              📝 {stats.totalStories}{" "}
              {stats.totalStories === 1 ? "story" : "stories"}
            </span>
            {Array.isArray(a.beats) && a.beats.length > 0 ? (
              <span className="pill pill--beads">
                🎯 {a.beats.slice(0, 3).join(" • ")}
                {a.beats.length > 3 ? " +" : ""}
              </span>
            ) : null}
          </div>

          {/* Actions */}
          <div className="authorPro__actions">
            {a.socials?.twitter ? (
              <a
                className="btn btn--ghost"
                href={a.socials.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <RiTwitterXFill className="btn__ico" /> X / Twitter
              </a>
            ) : null}
            {a.socials?.linkedin ? (
              <a
                className="btn btn--ghost"
                href={a.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="btn__ico" /> LinkedIn
              </a>
            ) : null}
            {a.socials?.website ? (
              <a
                className="btn btn--ghost"
                href={a.socials.website}
                target="_blank"
                rel="noreferrer"
              >
                <TbWorld className="btn__ico" /> Website
              </a>
            ) : null}
            {a.socials?.email ? (
              <a
                className="btn btn--primary"
                href={`mailto:${a.socials.email}`}
              >
                <HiOutlineMail className="btn__ico" /> Contact{" "}
                {firstName(a.name)}
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {/* Details grid */}
      <div className="authorPro__details">
        {/* Highlights / Accolades */}
        {Array.isArray(a.accolades) && a.accolades.length > 0 ? (
          <section className="panel">
            <h3 className="panel__title">Highlights</h3>
            <ul className="list">
              {a.accolades.map((award, i) => (
                <li className="list__item" key={i}>
                  🏆 {award}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Coverage / Beats */}
        {Array.isArray(a.beats) && a.beats.length > 0 ? (
          <section className="panel">
            <h3 className="panel__title">Coverage</h3>
            <div className="chips">
              {a.beats.map((b, i) => (
                <span className="chip" key={i}>
                  {b}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        {/* Numbers */}
        <section className="panel">
          <h3 className="panel__title">By the Numbers</h3>
          <div className="numbers">
            <div className="numbers__item">
              <div className="numbers__val">{stats.totalStories}</div>
              <div className="numbers__label">
                Published {stats.totalStories === 1 ? "Story" : "Stories"}
              </div>
            </div>
            {/* Add more stat blocks later (Interviews, Investigations, etc.) */}
          </div>
        </section>

        {/* CTA back to newsroom */}
        <section className="panel panel--subtle">
          <div className="panel__cta">
            <Link href="/newsroom" className="btn btn--subtle">
              Explore the Newsroom
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function normalize(a = {}) {
  // prefer socials.website/email if top-level missing
  const website = a.website || a.socials?.website;
  const email = a.email || a.socials?.email;

  return {
    ...a,
    socials: {
      ...a.socials,
      website,
      email,
    },
    beats: Array.isArray(a.beats) ? a.beats : [],
    accolades: Array.isArray(a.accolades) ? a.accolades : [],
    posts: Array.isArray(a.posts) ? a.posts : [],
  };
}

function firstName(full = "") {
  return full.split(" ")[0] || "Author";
}
