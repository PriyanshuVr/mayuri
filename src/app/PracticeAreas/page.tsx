import Header from "../../core/component/header";
import Header2 from "../../core/component/header2";
import Footer from "@/core/component/footer";
import Footer3 from "@/core/component/footer3";
import ServicesSection from "@/core/component/practice_areas";

export default function ContactUs_Page() {
  return (
    <div>
      <div className="mx-4 md:mx-12 lg:mx-40">
        <Header />
      </div>
      <div className="w-full h-0.5 bg-[#8f662d] my-2.5"></div>
      <div className="mx-4 md:mx-12 lg:mx-40">
        <Header2 />
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-28 mt-20 text-[#372d1f] text-center">
          PRACTICE AREAS
        </h1>
        <ServicesSection />
        <Footer3 />
      </div>
      <div className="bg-black">
        <div className="mx-4 md:mx-12 lg:mx-40">
          <Footer />
        </div>
      </div>
    </div>
  );
}
