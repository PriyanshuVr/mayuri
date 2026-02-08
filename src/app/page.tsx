import Header from "../core/component/header";
import Footer from "../core/component/footer";
import Header2 from "../core/component/header2";
import Footer2 from "../core/component/footer2";
import FeedbackSlider from "../core/component/feedback_slider";
import GridMenu from "../core/component/grid_menu";
import Intro from "@/core/component/intro";
import Intro2 from "@/core/component/intro2";
import FirmCol from "@/core/component/firm_col";
import HomeLast from "@/core/component/home_last";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLIENT TESTIMONIALS",
  description:
    "Read what clients say about Advocate Mayuri Yadav & Associates - trusted for clear guidance, professionalism, and strong legal representation in Delhi NCR.",
  keywords: [
    "Client Reviews",
    "Advocate Mayuri Yadav & Associates – Trusted Legal Services in Delhi NCR",
  ],
};

export default function Home_Page() {
  return (
    <div>
      <div className="bg-[#f7f2ec]">
        <div className="mx-4 md:mx-12 lg:mx-40">
          <Header />
        </div>
        <div className="w-full h-0.5 bg-[#8f662d] my-2.5"></div>
        <div className="mx-4 md:mx-12 lg:mx-40">
          <Header2 />
          <Intro />
        </div>
      </div>
      <div className="mx-4 md:mx-12 lg:mx-40">
        <Intro2 />
      </div>
      <div className="bg-[#f7f2ec]">
        <div className="mx-4 md:mx-12 lg:mx-40">
          <GridMenu />
        </div>
      </div>
      <div className="mx-4 md:mx-12 lg:mx-40">
          <FirmCol />
      </div>
      <FeedbackSlider />
      <div className="mx-4 md:mx-12 lg:mx-40">
          <HomeLast />
      </div>
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
