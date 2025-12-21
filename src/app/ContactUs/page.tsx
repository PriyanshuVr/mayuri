import Header from "../../core/component/header";
import Header2 from "../../core/component/header2";
import ContactUs from "../../core/component/contact_us";
import Footer from "@/core/component/footer";

export default function ContactUs_Page() {
  return (
    <div>
      <div className="mx-4 md:mx-12 lg:mx-40">
        <Header />
      </div>
      <div className="w-full h-0.5 bg-[#8f662d] my-2.5"></div>
      <div className="mx-4 md:mx-12 lg:mx-40">
        <Header2 />
        <ContactUs />
      </div>
      <div className="bg-black">
        <div className="mx-4 md:mx-12 lg:mx-40">
          <Footer />
        </div>
      </div>
    </div>
  );
}
