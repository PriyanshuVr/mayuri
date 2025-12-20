import Image from "next/image";

export default function FirmCol() {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-28 mb-48">
      <div className="grid grid-cols-2 gap-20 items-center">
        <div className="space-y-6 max-w-lg">
          <h2 className="text-5xl font-serif text-gray-800 mb-9">The Firm</h2>

          <p className="text-base text-gray-700 leading-relaxed">
            <span className="font-semibold text-[#8f662d]">
              Mayuri Yadav & Associates
            </span>{" "}
            is built on principles of integrity, diligence, and transparency. We
            combine traditional advocacy with modern research tools to provide
            legal solutions that are practical, timely, and effective.
          </p>

          <div className="text-base text-gray-700 space-y-2">
            <div>• Clear client communication</div>
            <div>• Thorough legal research</div>
            <div>• Ethical representation</div>
            <div>• Personalized strategies for every case</div>
          </div>

          <button className="rounded-sm bg-linear-to-b from-[#7e6643] to-[#ab9165] px-6 py-3 text-[15px] text-white font-semibold cursor-pointer">
            Explore Our Services →
          </button>
        </div>

        <div className="relative w-fit ml-auto">
          <Image
            src="/court.png"
            alt="Supreme Court of India"
            width={420}
            height={420}
            className="rounded-2xl object-cover"
          />

          <div className="absolute -left-30 -bottom-22 rounded-xl shadow-xl overflow-hidden">
            <Image src="/books.png" alt="Law Books" width={220} height={260} />
          </div>
        </div>
      </div>
    </div>
  );
}
