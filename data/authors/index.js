import david from "./david.json";
import elisa from "./elisa.json";
import kristin from "./kristin.json";
import marvin from "./marvin.json";
import theresa from "./theresa.json";

export const authorMap = {
  [david.slug]: david,
  [theresa.slug]: theresa,
  [kristin.slug]: kristin,
  [marvin.slug]: marvin,
  [elisa.slug]: elisa,
};

export const allAuthorSlugs = Object.keys(authorMap);

export function getAuthor(slug) {
  return authorMap[slug];
}

export function allAuthors() {
  return Object.values(authorMap);
}
