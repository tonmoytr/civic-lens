import NewsPageTitle from "@/app/components/category/CategoryPageTitle";
import AdvertiseSection from "@/app/components/home/AdvertiseSection";
import NewsGrid from "@/app/components/news/NewsGrid";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";

export default function NewsPage() {
  return (
    <div>
      <Navbar />
      <main>
        <NewsPageTitle />
        <NewsGrid />
        <AdvertiseSection />
      </main>
      <Footer />
    </div>
  );
}
