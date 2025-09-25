import alex from "./alex.json";
import daniel from "./daniel.json";
import david from "./david.json";
import elisa from "./elisa.json";
import james from "./james.json";
import kristin from "./kristin.json";
import lily from "./lily.json";
import marvin from "./marvin.json";
import nina from "./nina.json";
import omar from "./omar.json";
import priya from "./priya.json";
import sophie from "./sophie.json";
import theresa from "./theresa.json";

export const authorMap = {
  [david.slug]: david,
  [theresa.slug]: theresa,
  [kristin.slug]: kristin,
  [marvin.slug]: marvin,
  [alex.slug]: alex,
  [daniel.slug]: daniel,
  [james.slug]: james,
  [lily.slug]: lily,
  [nina.slug]: nina,
  [omar.slug]: omar,
  [priya.slug]: priya,
  [sophie.slug]: sophie,
  [elisa.slug]: elisa,
};

export const allAuthorSlugs = Object.keys(authorMap);

export function getAuthor(slug) {
  return authorMap[slug];
}

export function allAuthors() {
  return Object.values(authorMap);
}
