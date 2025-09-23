import business from "./business.json";
import culture from "./culture.json";
import sports from "./sports.json";
import technology from "./technology.json";
import worldNews from "./world-news.json";

export const categoryMap = {
  [business.slug]: business,
  [worldNews.slug]: worldNews,
  [sports.slug]: sports,
  [culture.slug]: culture,
  [technology.slug]: technology,
};

export const allCategorySlugs = Object.keys(categoryMap);

export function getCategory(slug) {
  return categoryMap[slug];
}

/* NEW: get a single post by category + slug */
export function getPost(categorySlug, postSlug) {
  const cat = categoryMap[categorySlug];
  if (!cat) return undefined;
  return cat.posts.find((p) => p.slug === postSlug);
}

/* NEW: flatten all posts for static params generation */
export function allPostsFlat() {
  return Object.values(categoryMap).flatMap((cat) =>
    (cat.posts || []).map((p) => ({
      ...p,
      categorySlug: cat.slug,
      categoryTitle: cat.title,
    }))
  );
}
