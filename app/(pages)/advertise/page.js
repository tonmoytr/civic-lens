import Advertisements from "@/app/components/advertise/Advertisements";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";

export default function AdvertisePage() {
  return (
    <div>
      <Navbar />
      <main>
        <Advertisements />
      </main>
      <Footer />
    </div>
  );
}
