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
