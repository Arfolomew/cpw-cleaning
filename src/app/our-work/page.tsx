import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OurWorkContent from "@/components/OurWorkContent";

export const metadata = {
  title: "Our Work | Clear Point Window Cleaning",
  description:
    "See before-and-after photos and videos of our window cleaning, gutter cleaning, pressure washing, and solar panel cleaning services in Pinellas and Pasco County, FL.",
};

export default function OurWorkPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero Banner */}
        <div className="bg-[#1A1E32] py-16 px-4 text-center">
          <p className="text-[#1FC6C7] font-semibold text-xs uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-4">Our Work</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Real results from real jobs across Pinellas and Pasco County. Crystal
            clear, every time.
          </p>
        </div>

        <OurWorkContent />
      </main>
      <Footer />
    </>
  );
}
