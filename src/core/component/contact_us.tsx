import { Phone, Mail, Clock4, MapPin, House } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="py-12">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-28 text-[#372d1f] text-center">
        CONTACT US
      </h1>
      <div className="grid grid-cols-2">
        <div>
          <p className="text-black text-[32px] font-semibold">
            Connect With Us
          </p>
          <div className="flex my-4">
            <Phone size={23} className="text-[#a48a5f] mr-4 my-1" />
            <p className="text-black">+91 8750130940</p>
          </div>
          <div className="flex my-4">
            <Mail size={23} className="text-[#a48a5f] mr-4 my-1" />
            <p className="text-black">adv.mayuri97yadav@gmail.com</p>
          </div>
          <div className="flex my-4">
            <Clock4 size={23} className="text-[#a48a5f] mr-4 my-1" />
            <div className="flex flex-col">
              <p className="text-black">
                Monday - Saturday | 10:00 AM - 7:00 PM
              </p>
              <p className="text-[11px] block text-black">
                ( Call for prior booking of appointment for consultation )
              </p>
            </div>
          </div>
          <div className="flex my-4">
            <MapPin size={23} className="text-[#a48a5f] mr-4 my-1" />
            <div className="flex flex-col">
              <p className="text-[18px] font-semibold text-black">
                Office Address:
              </p>
              <p className="text-black">
                Chamber No. A-10, A.N Monga Block, Western Wing,
              </p>
              <p className="text-black">Tis Hazari Courts,Delhi - 110054</p>
            </div>
          </div>
          <div className="flex my-4">
            <House size={23} className="text-[#a48a5f] mr-4 my-1" />
            <div className="flex flex-col">
              <p className="text-[18px] font-semibold text-black">
                Residential-cum-Office:
              </p>
              <p className="text-[15px] text-black">
                RZ-378, Street No. 6, East Sagarpur, New Delhi - 110046
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-full max-w-md rounded-2xl bg-[#8b6a3f] p-6 shadow-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-white w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Your Phone"
                inputMode="numeric"
                pattern="[0-9]*"
                minLength={10}
                maxLength={10}
                className="bg-white w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="bg-white w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Message"
                className="bg-white w-full resize-none rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
              />

              <button
                type="submit"
                className="bg-white w-full rounded-lg bg-linear-to-r from-[#e3a33b] to-[#d4952f] py-3 text-lg font-semibold text-white transition hover:opacity-90 cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
