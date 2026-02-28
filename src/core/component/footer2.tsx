import { Phone, Mail } from "lucide-react";

export default function Footer2() {
  return (
    <div className="bg-[#f7f2ec] py-12">
      <div className="py-14 px-6 md:px-0 text-center">

        <div className="my-3">
          <p className="text-[#372d1f] text-[32px] md:text-[45px] font-medium">
            Ready to discuss your legel matter?
          </p>
        </div>

        <div className="my-3">
          <p className="text-black text-[16px] md:text-[22px]">
            Contact us today for consultation with{" "}
            <span className="text-[#8f662d] font-semibold">
              Advocate Mayuri Yadav
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <button className="flex items-center gap-3 border-3 border-[#a48a5f] text-[#a48a5f] px-5 py-3 rounded-sm w-fit md:w-auto">
            <img
              src="/icons/icon_phone.svg"
              alt="Phone"
              className="w-5 h-5 mx-2"
            />
            <p className="text-black text-[29px]">+91 8750130940</p>
          </button>

          <button className="flex items-center gap-3 border-3 border-[#a48a5f] text-[#a48a5f] px-5 py-3 rounded-sm w-fit md:w-auto">
            <img
              src="/icons/icon_email.svg"
              alt="Phone"
              className="w-5 h-5 mx-2"
            />
            <p className="text-black text-[29px] break-all md:break-normal">
              adv.mayuri97yadav@gmail.com
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
