// /data/podcasts/index.js
// Plain JS; no TS. You can move this to JSON if you prefer.
// If you keep remote images, be sure next.config.js allows the domains.

export const podcasts = [
  {
    slug: "beyond-the-mic-transformative-ideas-powerful-voices-endless-inspiration",
    title:
      "Beyond the mic transformative ideas, powerful voices, endless inspiration",
    authorName: "Guy Hawkins",
    authorSlug: "guy-hawkins", // link to your /news-author/[slug]
    image: "/assets/images/podcasts/1.jpg",
    date: "2025-02-04",
    duration: "42:10",
    audioSrc: "/audio/beyond-the-mic.mp3", // optional (put file in /public/audio)
    description:
      "A conversation with creators who are shaping culture across tech and media.",
    content: [
      "In this episode we explore how independent voices are reshaping journalism.",
      "From short-form to long-form reporting, we discuss formats that build trust.",
    ],
  },
  {
    slug: "conversations-beyond-borders-insights-ideas-and-inspiring-journeys",
    title:
      "Conversations beyond borders insights, ideas and inspiring journeys",
    authorName: "Marvin McKinney",
    authorSlug: "marvin-mckinney",
    image: "/assets/images/podcasts/1.jpg",
    date: "2025-02-01",
    duration: "38:22",
    audioSrc: "",
    description:
      "Stories that cross cultures and disciplines to spark new ideas.",
    content: [
      "Borders are blurring as ideas travel faster than ever.",
      "We unpack how collaboration unlocks unexpected breakthroughs.",
    ],
  },
  {
    slug: "conversations-beyond-borders-insights-ideas-and-inspiring-journeys",
    title:
      "Conversations beyond borders insights, ideas and inspiring journeys",
    authorName: "Marvin McKinney",
    authorSlug: "marvin-mckinney",
    image: "/assets/images/podcasts/1.jpg",
    date: "2025-02-01",
    duration: "38:22",
    audioSrc: "",
    description:
      "Stories that cross cultures and disciplines to spark new ideas.",
    content: [
      "Borders are blurring as ideas travel faster than ever.",
      "We unpack how collaboration unlocks unexpected breakthroughs.",
    ],
  },
  {
    slug: "conversations-beyond-borders-insights-ideas-and-inspiring-journeys",
    title:
      "Conversations beyond borders insights, ideas and inspiring journeys",
    authorName: "Marvin McKinney",
    authorSlug: "marvin-mckinney",
    image: "/assets/images/podcasts/1.jpg",
    date: "2025-02-01",
    duration: "38:22",
    audioSrc: "",
    description:
      "Stories that cross cultures and disciplines to spark new ideas.",
    content: [
      "Borders are blurring as ideas travel faster than ever.",
      "We unpack how collaboration unlocks unexpected breakthroughs.",
    ],
  },
  // add the rest from your current grid…
];

export function getAllPodcasts() {
  return podcasts;
}

export function getPodcast(slug) {
  return podcasts.find((p) => p.slug === slug);
}

export function allPodcastSlugs() {
  return podcasts.map((p) => ({ slug: p.slug }));
}

export function podcastsByAuthor(authorSlug) {
  return podcasts.filter((p) => p.authorSlug === authorSlug);
}
