import CategoryPageTitle from "@/app/components/category/CategoryPageTitle";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";

export default function CategoryPage() {
  return (
    <div>
      <Navbar />
      <main>
        <CategoryPageTitle />
      </main>
      <Footer />
    </div>
  );
}
