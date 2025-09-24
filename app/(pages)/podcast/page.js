import AdvertiseSection from "@/app/components/home/AdvertiseSection";
import PodcastsPageTitle from "@/app/components/podcasts/PodcastPageTitle";
import PodcastGrid from "@/app/components/podcasts/PodcastsGrid";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";

export default function PodcastsPage() {
  return (
    <div>
      <Navbar />
      <main>
        <PodcastsPageTitle />
        <PodcastGrid />
        <AdvertiseSection/>
      </main>
      <Footer />
    </div>
  );
}
