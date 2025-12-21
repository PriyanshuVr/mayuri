import FirmPage1 from "@/core/component/firm_page1";
import Header from "../../core/component/header";
import Header2 from "../../core/component/header2";
import Footer from "@/core/component/footer";
import Footer2 from "@/core/component/footer2";
import Footer4 from "@/core/component/footer4";
import FirmPage2 from "@/core/component/firm_page2";

export default function OurFirm_Page() {
  return (
    <div>
      <div className="mx-4 md:mx-12 lg:mx-40">
        <Header />
      </div>
      <div className="w-full h-0.5 bg-[#8f662d] my-2.5"></div>
      <div className="mx-4 md:mx-12 lg:mx-40">
        <Header2 />
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-28 mt-20 text-[#372d1f] text-center">
          OUR FIRM
        </h1>
        <FirmPage1 />
        <FirmPage2 />
      </div>
      <Footer4 />
      <div className="bg-[#f7f2ec]">
        <div className="mx-4 md:mx-12 lg:mx-40">
          <Footer2 />
        </div>
      </div>
      <div className="bg-black">
        <div className="mx-4 md:mx-12 lg:mx-40">
          <Footer />
        </div>
      </div>
    </div>
  );
}
