import AboutFacts from "@/app/components/about/AboutFacts";
import AboutFAQ from "@/app/components/about/AboutFAQ";
import AboutHero from "@/app/components/about/AboutHero";
import AboutIntro from "@/app/components/about/AboutIntro";
import AboutStory from "@/app/components/about/AboutStory";
import AboutVision from "@/app/components/about/AboutVision";
import EditorialTeam from "@/app/components/home/EditorialTeam";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutStory />
        <AboutFacts />
        <AboutVision />
        <EditorialTeam />
        <AboutFAQ />
      </main>
      <Footer />
    </div>
  );
}
