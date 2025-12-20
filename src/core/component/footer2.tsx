import { Phone, Mail } from "lucide-react";

export default function Footer2() {
  return (
    <div className="bg-[#f7f2ec] py-12">
      <div className="justify-items-center py-14">
        <div className="my-3">
          <p className="text-[#372d1f] text-[45px] font-medium">
            Ready to discuss your legel matter?
          </p>
        </div>
        <div className="my-3">
          <p className="text-black text-[22px]">
            Contact us today for consultation with{" "}
            <span className="text-[#8f662d] font-semibold">
              Advocate Mayuri Yadav
            </span>
          </p>
        </div>
        <div className="flex flex-row">
          <button className="flex items-center gap-3 border-3 border-[#a48a5f] text-[#a48a5f] px-5 py-3 rounded-xl mx-4">
            <div className="flex flex-row items-center">
              <Phone size={25} className="text-[#a48a5f] mx-4 my-1" />
              <p className="text-black text-[18px]">+91 8750130940</p>
            </div>
          </button>
          <button className="flex items-center gap-3 border-3 border-[#a48a5f] text-[#a48a5f] px-5 py-3 rounded-xl">
            <div className="flex flex-row items-center">
              <Mail size={25} className="text-[#a48a5f] mx-4 my-1" />
              <p className="text-black text-[18px]">
                adv.mayuri97yadav@gmail.com
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
