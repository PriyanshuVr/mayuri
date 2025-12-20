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
    text: "Advocate Mayuri Yadav handled my matrimonial dispute with complete professionalism and compassion. She explained every step clearly and ensured my concerns were addressed patiently. Her strategic approach helped me achieve a favorable outcome.",
    author: "Client, Delhi (Matrimonial Case)",
  },
  {
    text: "Advocate Mayuri Yadav handled my matrimonial dispute with complete professionalism and compassion. She explained every step clearly and ensured my concerns were addressed patiently. Her strategic approach helped me achieve a favorable outcome.",
    author: "Client, Delhi (Matrimonial Case)",
  },
];

const testimonials = Array(5).fill(baseTestimonials).flat();

export default function FeedbackSlider() {
  return (
    <section className="bg-[#f7f2ec] py-24">
      <h2 className="text-center text-4xl font-serif mb-16 text-[#3a2f23]">
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
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-700 text-center px-8
                  ${isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"}
                `}
              >
                {/* stars */}
                <div className="flex justify-left mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[#a48a5f] fill-[#a48a5f]"
                    />
                  ))}
                </div>

                <p className="text-[#3a2f23] leading-relaxed text-justify mb-4">
                  {item.text}
                </p>

                <p className="font-semibold text-[#3a2f23]">— {item.author}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
