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
                    src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/679325bd8ae35424b3781a97_kivzo.svg"
                    alt="Kivzo"
                  />
                </Link>

                <div className="nav-menu-wrap">
                  <nav role="navigation" className="nav-menu w-nav-menu">
                    <div className="w-dyn-list">
                      <div role="list" className="nav-link-list w-dyn-items">
                        <div
                          role="listitem"
                          className="nav-link-item w-dyn-item"
                        >
                          <div className="dot"></div>
                          <Link
                            href="/news-categories/business"
                            className="nav-link w-inline-block"
                          >
                            <div className="link-text">Business</div>
                            <div className="link-hover-text">Business</div>
                          </Link>
                        </div>

                        <div
                          role="listitem"
                          className="nav-link-item w-dyn-item"
                        >
                          <div className="dot"></div>
                          <Link
                            href="/news-categories/health-news"
                            className="nav-link w-inline-block"
                          >
                            <div className="link-text">Health News</div>
                            <div className="link-hover-text">Health News</div>
                          </Link>
                        </div>

                        <div
                          role="listitem"
                          className="nav-link-item w-dyn-item"
                        >
                          <div className="dot"></div>
                          <Link
                            href="/news-categories/world-news"
                            className="nav-link w-inline-block"
                          >
                            <div className="link-text">World News</div>
                            <div className="link-hover-text">World News</div>
                          </Link>
                        </div>

                        <div
                          role="listitem"
                          className="nav-link-item w-dyn-item"
                        >
                          <div className="dot"></div>
                          <Link
                            href="/news-categories/sports"
                            className="nav-link w-inline-block"
                          >
                            <div className="link-text">Sports</div>
                            <div className="link-hover-text">Sports</div>
                          </Link>
                        </div>

                        <div
                          role="listitem"
                          className="nav-link-item w-dyn-item"
                        >
                          <div className="dot"></div>
                          <Link
                            href="/news-categories/culture"
                            className="nav-link w-inline-block"
                          >
                            <div className="link-text">Culture</div>
                            <div className="link-hover-text">Culture</div>
                          </Link>
                        </div>

                        <div
                          role="listitem"
                          className="nav-link-item w-dyn-item"
                        >
                          <div className="dot"></div>
                          <Link
                            href="/subscribe"
                            className="nav-link w-inline-block"
                          >
                            <div className="link-text">Subscribe</div>
                            <div className="link-hover-text">Subscribe</div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* trailing dot before cart like OG */}
                    <div className="dot"></div>

                    {/* Cart button (static count for now) */}
                    <div className="cart-button">
                      <Link
                        href="#"
                        aria-label="Open cart"
                        className="w-commerce-commercecartopenlink cart-btn w-inline-block"
                        role="button"
                      >
                        <div className="w-inline-block">Cart</div>
                        <div className="cart-item">
                          <div>(</div>
                          <div className="w-commerce-commercecartopenlinkcount cart-qnt">
                            0
                          </div>
                          <div>)</div>
                        </div>
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>

              {/* RIGHT: Search (orange round button intentionally removed) */}
              <div className="nav-right">
                <form action="/search" className="search w-form" role="search">
                  <input
                    className="search-input w-input"
                    maxLength={256}
                    name="query"
                    placeholder="Search here"
                    type="search"
                    id="search"
                    required
                  />
                  <input
                    type="submit"
                    className="search-button w-button"
                    value=""
                    aria-label="Submit search"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
