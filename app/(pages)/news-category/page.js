import CategoriesGrid from "@/app/components/category/CategoriesGrid";
import CategoryPageTitle from "@/app/components/category/CategoryPageTitle";
import AdvertiseSection from "@/app/components/home/AdvertiseSection";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";

export default function CategoryPage() {
  return (
    <div>
      <Navbar />
      <main>
        <CategoryPageTitle />
        <CategoriesGrid />
        <AdvertiseSection />
      </main>
      <Footer />
    </div>
  );
}
