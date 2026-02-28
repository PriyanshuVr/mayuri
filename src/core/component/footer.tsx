import { Phone, Mail, Clock4, MapPin, House } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black pb-12 text-white">

      <div className="flex items-center py-10 px-6 md:px-0 md:ml-16">
        <Image
          src="/logo_wn.png"
          alt="logo"
          width={65}
          height={65}
          className="mr-5"
        />
        <div className="text-[29px]">Contact Info</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0 md:ml-16">

        <div className="space-y-4">
          <div className="flex items-start">
            <img
              src="/icons/icon_phone.svg"
              alt="Phone"
              className="w-5 h-5 mx-2"
            />
            <p className="text-[20px]">+91 8750130940</p>
          </div>

          <div className="flex items-start">
            <img
            src="/icons/icon_email.svg"
            alt="Phone"
            className="w-5 h-5 mx-2"
          />
            <p className="text-[20px]">adv.mayuri97yadav@gmail.com</p>
          </div>

          <div className="flex items-start">
            <img
            src="/icons/icon_clock.svg"
            alt="Phone"
            className="w-5 h-5 mx-2"
          />
            <div>
              <p className="text-[20px]">Monday - Saturday | 10:00 AM - 7:00 PM</p>
              <p className="text-[18px]">
                ( Call for prior booking of appointment for consultation )
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start">
            <img
            src="/icons/icons_location.svg"
            alt="Phone"
            className="w-5 h-5 mx-2"
          />
            <div>
              <p className="text-[18px] font-semibold">Office Address:</p>
              <p className="text-[20px]">Chamber No. A-10, A.N Monga Block, Western Wing,</p>
              <p className="text-[20px]">Tis Hazari Courts, Delhi - 110054</p>
            </div>
          </div>

          <div className="flex items-start">
            <img
            src="/icons/icons_address.svg"
            alt="Phone"
            className="w-5 h-5 mx-2"
          />
            <div>
              <p className="text-[18px] font-semibold">
                Residential-cum-Office:
              </p>
              <p className="text-[20px]">
                RZ-378, Street No. 6, East Sagarpur, New Delhi - 110046
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
