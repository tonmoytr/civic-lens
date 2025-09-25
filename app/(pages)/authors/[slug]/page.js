import AboutFAQ from "@/app/components/about/AboutFAQ";
import AuthorProfile from "@/app/components/author/AuthorProfile";
import EditorialTeam from "@/app/components/home/EditorialTeam";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import { allAuthorSlugs, getAuthor } from "@/data/authors";
import { getPost } from "@/data/newes";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allAuthorSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = getAuthor(slug);
  return {
    title: author ? `${author.name} • Civic Lens` : "Author • Civic Lens",
    description: author?.bio || "Civic Lens author profile",
  };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return notFound();

  // Resolve post refs to actual posts (filter any missing)
  const authoredPosts = (author.posts || [])
    .map((ref) => ({
      post: getPost(ref.category, ref.slug),
      categorySlug: ref.category,
    }))
    .filter((x) => x.post);

  return (
    <>
      <Navbar />
      <div className="container">
        <main className="author-page ">
          <div className="author-wrap">
            <AuthorProfile author={author} />
          </div>
          <div>
            <EditorialTeam />
          </div>
          <div>
            <AboutFAQ />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
