import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import GalleryTeaser from "@/components/GalleryTeaser";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <About />
        <Reviews />
        <ServiceAreas />
        <GalleryTeaser />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
