import AboutFAQ from "@/app/components/about/AboutFAQ";
import ContactFormSection from "@/app/components/contactUs/ContactFormSection";
import ContactUsTitle from "@/app/components/contactUs/ContactUsTitle";
import GetInTouch from "@/app/components/contactUs/GetInTouch";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <main>
        <ContactUsTitle />
        <ContactFormSection />
        <GetInTouch />
        <AboutFAQ />
      </main>
      <Footer />
    </div>
  );
}
