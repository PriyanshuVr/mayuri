import Image from "next/image";

export default function Intro() {
  return (
    <div className="relative h-[520px] md:h-[600px] w-full overflow-hidden my-1">

      <Image
        src="/statue.png"
        alt="Library"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#f7f2ec]/0" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 h-full items-center px-6 md:px-0">

        <div className="hidden md:flex justify-end mr-9">
          <Image
            src="/profile.png"
            alt="Profile"
            width={500}
            height={500}
            className="object-cover h-full w-full"
          />
        </div>

        <div className="flex flex-col justify-center md:items-start items-start md:pl-0 pl-2">
          <div className="text-black mb-2 text-[18px] md:text-[22px] pb-5 md:pb-7">
            Welcome to{" "}
            <span className="text-[#8f662d] font-bold">
              Mayuri Yadav & Associates
            </span>
          </div>

          <div className="text-[#372d1f] text-[22px] md:text-[30px] font-semibold">
            Trusted Legal Representation.
          </div>
          <div className="text-[#372d1f] text-[22px] md:text-[30px] font-semibold">
            Practical Solutions.
          </div>
          <div className="text-[#372d1f] text-[22px] md:text-[30px] font-semibold">
            Client-Centered Approach.
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="rounded-lg bg-linear-to-b from-[#7e6643] to-[#ab9165] px-6 py-3 text-[14px] md:text-[15px] text-white font-semibold cursor-pointer"
            >
              EXPLORE OUR SERVICES →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
