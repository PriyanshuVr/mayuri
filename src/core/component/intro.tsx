import Image from "next/image";

export default function Intro() {
  return (
    <div className="relative h-120 w-full overflow-hidden my-5">
      <Image
        src="/statue.png"
        alt="Library"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#f7f2ec]/50" />
      <div className="relative grid grid-cols-2 h-full items-center justify-center">
        <div className="mr-9">
            <Image
                src="/Layer 12.png"
                alt=""
                width={500}
                height={500}
                className="object-cover h-full w-full"
            />
        </div>
        <div className="flex flex-col">
            <div className="text-black mb-2 text-[16px]">
                Welcome to <span className="text-[#8f662d] font-semibold">Mayuri Yadav & Associates</span>
            </div>
            <div className="text-[#372d1f]">
                Trusted Legal Representation.
            </div>
            <div className="text-[#372d1f]">
                Practical Solutions.
            </div>
            <div className="text-[#372d1f]">
                Client-Centered Approach.
            </div>
            <div>
                <button
                type="submit"
                className="bg-white rounded-lg bg-linear-to-b from-[#7e6643] to-[#ab9165] px-6 py-3 text-[16px] text-white transition hover:opacity-90 cursor-pointer"
                >
                    EXPLORE OUR SERVICES →
                </button>
            </div>
        </div>
        
      </div>
    </div>
  );
}
