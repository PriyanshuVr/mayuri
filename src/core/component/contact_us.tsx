"use client";

import { Phone, Mail, Clock4, MapPin, House } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactUs() {

  const formRef = useRef<HTMLFormElement | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    emailjs.sendForm(
      "service_hhweazs",
      "template_21litpp",
      formRef.current,
      "8WWoli8jjGN25e-Y_"
    )
      .then(() => {
        setShowPopup(true);
        formRef.current?.reset();

        setTimeout(() => {
          setShowPopup(false);
        }, 10000);

      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        alert("Failed to send message ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="py-12">
      <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif mb-28 text-[#372d1f] text-center">
        CONTACT US
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
        <div className="flex justify-start lg:justify-end">
          <div className="w-full max-w-md rounded-2xl bg-[#8b6a3f] p-6 shadow-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="bg-white w-full rounded-lg px-4 py-3 text-black"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="bg-white w-full rounded-lg px-4 py-3 text-black"
              />

              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone"
                required
                className="bg-white w-full rounded-lg px-4 py-3 text-black"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="bg-white w-full rounded-lg px-4 py-3 text-black"
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                className="bg-white w-full rounded-lg px-4 py-3 h-28 resize-none text-black"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-linear-to-b from-[#dd9229] to-[#d2983c] py-3 text-lg font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"

              >
                {loading ? "Sending..." : "SUBMIT"}
              </button>

            </form>
          </div>
        </div>
      </div>
      {
        showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-white rounded-xl p-6 w-[320px] text-center shadow-xl transition-all duration-300 scale-100 animate-in fade-in zoom-in">


              <h2 className="text-xl font-semibold text-green-600">
                ✅ Message Sent
              </h2>

              <p className="text-gray-600 mt-2">
                Your message has been delivered successfully.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                OK
              </button>

            </div>
          </div>
        )
      }

    </div>
  );
}

