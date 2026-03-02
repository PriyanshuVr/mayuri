"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

const baseTestimonials = [
  {
    text: "Advocate Mayuri Yadav handled my matrimonial dispute with complete professionalism and compassion. She explained every step clearly and ensured my concerns were addressed patiently. Her strategic approach helped me achieve a favorable outcome.",
    author: "Client, Delhi (Matrimonial Case)",
  },
  {
    text: "I approached her for a property partition suit. She not only drafted all documents promptly but also handled court procedures efficiently. Her attention to detail and legal understanding are commendable.",
    author: "Client, Gurugram (Civil Matter)",
  },
  {
    text: "In my cheque bounce case, her arguments were precise and persuasive. She made sure I understood the entire process and kept me updated at every hearing. I was extremely satisfied with the result.",
    author: "Client, Delhi (Cheque Bounce Case)",
  },
  {
    text: "Adv. Mayuri made the entire mutual divorce process smooth and dignified. Her guidance on child custody and alimony issues was clear and practical. She truly cares for her clients beyond just paperwork.",
    author: "Client, Noida (Family Law)",
  },
  {
    text: "Her presentation before the court was confident, organized, and convincing. The way she articulated facts and law showed her strong command over legal principles.",
    author: "Client, Delhi (Civil Litigation)",
  },
  {
    text: "She explains laws in simple terms and always maintains transparency regarding fees and procedure. A rare combination of professionalism and genuine care for clients.",
    author: "Client,  (Matrimonial & Domestic Violence Case)",
  },
  {
    text: "Instead of prolonging litigation, she negotiated a fair settlement for both sides and helped close the matter efficiently. Her mediation skills saved me a lot of time and stress.",
    author: "Client, Karol Bagh (Negotiable Instruments Act Case)",
  },
];

const testimonials = Array(5).fill(baseTestimonials).flat();

export default function FeedbackSlider() {
  return (
    <section className="bg-[#f7f2ec] py-20">
      <h2 className="text-center text-[74px] mb-16 text-[#3a2f23]">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Autoplay]}
        centeredSlides
        slidesPerView={1.2}
        spaceBetween={40}
        loop
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={12000}
        allowTouchMove={false}
        breakpoints={{
          768: { slidesPerView: 1.8 },
          1024: { slidesPerView: 2.4 },
        }}
        className="max-w-9xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-700 text-center px-8
                  ${isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"}
                `}
              >
                <div className="flex justify-left mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[#a48a5f] fill-[#a48a5f]"
                    />
                  ))}
                </div>

                <p className="font-jost text-[31px] text-[#3a2f23] leading-relaxed text-left mb-4">
                  {item.text}
                </p>

                <p className="font-lora font-bold text-[#3a2f23] text-[30px] text-left">— {item.author}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
