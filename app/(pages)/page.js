import AdvertiseSection from "../components/home/AdvertiseSection";
import EditorialTeam from "../components/home/EditorialTeam";
import EditorsPick from "../components/home/EditorsPick";
import Hero from "../components/home/Hero";
import LatestNews from "../components/home/LatestNews";
import PodcastSection from "../components/home/PodcastSection";
import TechnologySection from "../components/home/TechnologySection";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Next sections come next (Hero, feature blocks, etc.) */}
      <main className="page-title container">
        <Hero />
        <EditorsPick />
        <LatestNews />
        <TechnologySection />
        <AdvertiseSection />
        <EditorialTeam />
        <PodcastSection />
      </main>
      <Footer />
    </>
  );
}
