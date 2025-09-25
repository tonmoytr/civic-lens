// app/components/shared/Navbar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname() || "/";

  // Normalize paths: remove trailing slash except root
  const norm = (p) => (p && p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);

  // When strictRoot=true, require exact match (used for "/news")
  const isActive = (href, { strictRoot = false } = {}) => {
    const p = norm(pathname);
    const h = norm(href);
    if (strictRoot) return p === h; // e.g. "/news" active only at /news
    return p === h || p.startsWith(h + "/"); // e.g. "/news/politics/*"
  };

  const LINKS = [
    { href: "/news", label: "All News", strictRoot: true },
    { href: "/news/politics", label: "Politics" },
    { href: "/news/world-news", label: "World News" },
    { href: "/news/sports", label: "Sports" },
    { href: "/news/culture", label: "Culture" },
    { href: "/news/technology", label: "Technology" },
  ];

  return (
    <header className="header">
      <div
        className="navbar w-nav"
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
      >
        <div className="w-layout-blockcontainer container w-container">
          <div className="navbar-wrap">
            <div className="nav-top">
              {/* LEFT: Brand */}
              <div className="nav-left">
                <Link
                  href="/"
                  className="brand w-nav-brand"
                  aria-label="Civic Lens"
                >
                  <img
                    loading="lazy"
                    style={{ width: "100px" }}
                    src="/assets/images/logo/logo-2.png"
                    alt="Civic Lens"
                  />
                </Link>
              </div>

              {/* RIGHT: Menu */}
              <div className="nav-menu-wrap">
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <div className="w-dyn-list">
                    <div role="list" className="nav-link-list w-dyn-items">
                      {LINKS.map(({ href, label, strictRoot }) => {
                        const active = isActive(href, { strictRoot });
                        return (
                          <div
                            role="listitem"
                            className="nav-link-item w-dyn-item"
                            data-active={active ? "true" : "false"}
                            key={href}
                          >
                            <div className="dot"></div>
                            <Link
                              href={href}
                              className={`nav-link w-inline-block${
                                active ? " is-active" : ""
                              }`}
                              aria-current={active ? "page" : undefined}
                            >
                              <div className="link-text">{label}</div>
                              <div className="link-hover-text">{label}</div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* trailing dot before cart like OG */}
                  <div className="dot"></div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
