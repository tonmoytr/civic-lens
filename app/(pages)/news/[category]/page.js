import CategoryGrid from "@/app/components/news/CategoryGrid";
import CategoryHeader from "@/app/components/news/CategoryHeader";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import { allCategorySlugs, getCategory } from "@/data/newes";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allCategorySlugs.map((slug) => ({ category: slug }));
}

export function generateMetadata({ params }) {
  const data = getCategory(params.category);
  return {
    title: data ? `${data.title} • Civic Lens` : "Civic Lens",
    description: data?.tagline || "Civic Lens news category",
  };
}

export default function CategoryPage({ params }) {
  const data = getCategory(params.category);
  if (!data) return notFound();

  return (
    <>
      <Navbar />
      <div style={{ margin: "3% 0" }}>
        <div className="container">
          <CategoryHeader title={data.title} tagline={data.tagline} />
        </div>
      </div>
      <main style={{ paddingBottom: "5%" }} className="news-page">
        <div className="container">
          <CategoryGrid category={data} />
        </div>
      </main>
      <Footer />
    </>
  );
}
