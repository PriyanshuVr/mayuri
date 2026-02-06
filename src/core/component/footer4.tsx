import Image from "next/image";

export default function Footer4() {
  return (
    <div className="relative h-80 w-full overflow-hidden">
      <Image
        src="/library.jpg"
        alt="Library"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#8b6a3f]/90" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-4 md:mx-40">
        <div className="max-w-3xl text-center text-white">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Philosophy
          </h2>

          <p className="italic text-[26px] md:text-[39px] font-semibold leading-relaxed">
            “I believe every client deserves clarity, confidence, and care in
            their legal journey. My aim is not just to represent but to
            empower.”
          </p>
        </div>
      </div>
    </div>
  );
}
