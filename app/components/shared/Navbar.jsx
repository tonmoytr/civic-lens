"use client";
import Link from "next/link";

export default function Navbar() {
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
              {/* LEFT: Brand + Menu */}
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
              {/* RIGHT : Menus */}
              <div className="nav-menu-wrap">
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <div className="w-dyn-list">
                    <div role="list" className="nav-link-list w-dyn-items">
                      <div role="listitem" className="nav-link-item w-dyn-item">
                        <div className="dot"></div>
                        <Link
                          href="/news/business"
                          className="nav-link w-inline-block"
                        >
                          <div className="link-text">Politics</div>
                          <div className="link-hover-text">Politics</div>
                        </Link>
                      </div>
                      <div role="listitem" className="nav-link-item w-dyn-item">
                        <div className="dot"></div>
                        <Link
                          href="/news/world-news"
                          className="nav-link w-inline-block"
                        >
                          <div className="link-text">World News</div>
                          <div className="link-hover-text">World News</div>
                        </Link>
                      </div>

                      <div role="listitem" className="nav-link-item w-dyn-item">
                        <div className="dot"></div>
                        <Link
                          href="/news/sports"
                          className="nav-link w-inline-block"
                        >
                          <div className="link-text">Sports</div>
                          <div className="link-hover-text">Sports</div>
                        </Link>
                      </div>

                      <div role="listitem" className="nav-link-item w-dyn-item">
                        <div className="dot"></div>
                        <Link
                          href="/news/culture"
                          className="nav-link w-inline-block"
                        >
                          <div className="link-text">Culture</div>
                          <div className="link-hover-text">Culture</div>
                        </Link>
                      </div>

                      <div role="listitem" className="nav-link-item w-dyn-item">
                        <div className="dot"></div>
                        <Link
                          href="/news/technology"
                          className="nav-link w-inline-block"
                        >
                          <div className="link-text">Technology</div>
                          <div className="link-hover-text">Technology</div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* trailing dot before cart like OG */}
                  <div className="dot"></div>

                  {/* Cart button (static count for now) */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
