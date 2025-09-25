import AuthorsGrid from "@/app/components/author/AuthorsGrid";
import AdvertiseSection from "@/app/components/home/AdvertiseSection";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";

export default function AuthorPage() {
  return (
    <div>
      <Navbar />
      <main>
        {/* <AuthorPageTitle /> */}
        <AuthorsGrid />
        <div style={{ margin: "7% 0" }}></div>
        <AdvertiseSection />
      </main>
      <Footer />
    </div>
  );
}
