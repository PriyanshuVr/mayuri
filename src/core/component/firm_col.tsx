import Image from "next/image";
import Link from "next/link";

export default function FirmCol() {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-20 md:mt-28 mb-44 md:mb-48">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-6 max-w-lg">
          <h2 className="text-4xl md:text-[74px] font-serif text-[#372d1f] mb-6 md:mb-9">
            The Firm
          </h2>

          <p className="text-base text-gray-700 leading-relaxed">
            <span className="font-semibold text-[#8f662d]">
              Mayuri Yadav & Associates
            </span>{" "}
            is built on principles of integrity, diligence, and transparency. We
            combine traditional advocacy with modern research tools to provide
            legal solutions that are practical, timely, and effective.
          </p>

          <div className="flex items-start gap-3 mb-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-[#a48a5f] shrink-0"></div>
            <div className="text-base text-gray-700">Clear client communication</div>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-[#a48a5f] shrink-0"></div>
            <div className="text-base text-gray-700">Thorough legal research</div>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-[#a48a5f] shrink-0"></div>
            <div className="text-base text-gray-700">Ethical representation</div>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-[#a48a5f] shrink-0"></div>
            <div className="text-base text-gray-700">Personalized strategies for every case</div>
          </div>

          <Link href="/PracticeAreas">
              <button
              type="submit"
              className="font-jost rounded-lg bg-linear-to-b from-[#7e6643] to-[#ab9165] px-6 py-3 text-[14px] md:text-[15px] text-white font-semibold cursor-pointer"
            >
              EXPLORE OUR SERVICES →
            </button>
            </Link>
        </div>

        <div className="relative w-full md:w-fit md:ml-auto flex justify-center md:justify-end">
          <Image
            src="/court.png"
            alt="Supreme Court of India"
            width={420}
            height={420}
            className="rounded-2xl object-cover max-w-full h-auto"
          />

          <div className="absolute -left-9 -bottom-35 lg:-left-30 lg:-bottom-22 rounded-xl shadow-xl">
            <Image src="/books.png" alt="Law Books" width={220} height={260} />
          </div>
        </div>
      </div>
    </div>
  );
}
