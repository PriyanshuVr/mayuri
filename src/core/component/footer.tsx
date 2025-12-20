import { Phone, Mail, Clock4, MapPin, House } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black pb-12">
      <div className="flex flex-row items-center py-10">
        <Image
          src="/logo_wn.png"
          alt="logo"
          width={65}
          height={65}
          className="mr-5"
        />
        <div className="text-[22px]">Contact Info</div>
      </div>
      <div className="grid grid-cols-2 ml-16">
        <div className="justify-items-start">
          <div className="flex my-3 justify-center">
            <Phone size={23} className="text-[#a48a5f] mx-4 my-1" />
            <p>+91 8750130940</p>
          </div>
          <div className="flex my-3 justify-center">
            <Mail size={23} className="text-[#a48a5f] mx-4 my-1" />
            <p>adv.mayuri97yadav@gmail.com</p>
          </div>
          <div className="flex my-3 justify-center">
            <Clock4 size={23} className="text-[#a48a5f] mx-4 my-1" />
            <div className="flex flex-col">
              <p>Monday - Saturday | 10:00 AM - 7:00 PM</p>
              <p className="text-[11px] block">
                ( Call for prior booking of appointment for consultation )
              </p>
            </div>
          </div>
        </div>
        <div className="justify-items-end">
          <div className="flex my-3 justify-center">
            <MapPin size={23} className="text-[#a48a5f] mx-4 my-1" />
            <div className="flex flex-col">
              <p className="text-[18px] font-semibold">Office Address:</p>
              <p>Chamber No. A-10, A.N Monga Block, Western Wing,</p>
              <p>Tis Hazari Courts,Delhi - 110054</p>
            </div>
          </div>
          <div className="flex my-3 justify-center">
            <House size={23} className="text-[#a48a5f] mx-4 my-1" />
            <div className="flex flex-col">
              <p className="text-[18px] font-semibold">
                Residential-cum-Office:
              </p>
              <p className="text-[15px]">
                RZ-378, Street No. 6, East Sagarpur, New Delhi - 110046
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
