import Image from "next/image";
import Link from "next/link";

export default function HomeLast() {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-28 mb-48">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        <div className="space-y-6 max-w-lg">
          <h2 className="text-5xl font-lora text-[#372d1f] mb-9">
            Why Clients Choose Us
          </h2>

          <div className="flex items-start gap-3 mb-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-[#372d1f] shrink-0"></div>
            <div className="text-base text-gray-700">Personalized attention to every case</div>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-[#372d1f] shrink-0"></div>
            <div className="text-base text-gray-700">Honest and practical legal advice</div>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-[#372d1f] shrink-0"></div>
            <div className="text-base text-gray-700">Regular updates and clear communication</div>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-[#372d1f] shrink-0"></div>
            <div className="text-base text-gray-700">Ethical and professional representation</div>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-[#372d1f] shrink-0"></div>
            <div className="text-base text-gray-700">Strong drafting and courtroom advocacy</div>
          </div>

          <Link href="/PracticeAreas">
              <button
              type="submit"
              className="rounded-lg bg-linear-to-b from-[#7e6643] to-[#ab9165] px-6 py-3 text-[14px] md:text-[15px] text-white font-jost font-semibold cursor-pointer"
            >
              EXPLORE OUR SERVICES →
            </button>
            </Link>
        </div>

        <div className="relative w-full md:w-fit md:mr-auto flex justify-center md:justify-start">

          <Image
            src="/group.png"
            alt="Supreme Court of India"
            width={420}
            height={420}
            className="rounded-2xl object-cover max-w-full h-auto"
          />

          <div className="md:block absolute -right-9 -bottom-28 rounded-xl shadow-xl">
            <Image
              src="/handshake.png"
              alt="Law Books"
              width={220}
              height={260}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
