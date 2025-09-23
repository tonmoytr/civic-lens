"use client";

import Image from "next/image";

export default function AuthorProfile({ author }) {
  return (
    <header className="author-header">
      <div className="author-avatar">
        <Image
          src={author.image}
          alt={author.name}
          fill
          sizes="120px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="author-headings">
        <h1 className="author-name-lg">{author.name}</h1>
        <p className="author-role-lg">{author.role}</p>
        {author.bio ? <p className="author-bio">{author.bio}</p> : null}
        {(author.socials?.twitter || author.socials?.linkedin) && (
          <div className="author-socials">
            {author.socials.twitter && (
              <a href={author.socials.twitter} target="_blank" rel="noreferrer">
                Twitter
              </a>
            )}
            {author.socials.linkedin && (
              <a
                href={author.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
