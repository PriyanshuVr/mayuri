import Image from "next/image";

export default function Intro2() {
  return (
    <div className="max-w-6xl mx-auto px-6 my-24">
      <div className="grid grid-cols-2 gap-20 items-center">
        <div className="space-y-6 max-w-lg">
          <p className="text-base text-gray-700 leading-relaxed">
            <span className="text-[#8f662d] font-semibold">
              Mayuri Yadav & Associates
            </span>
            , a Delhi/NCR-based law firm dedicated to delivering practical,
            result-oriented, and client-focused legal solutions. Led by Advocate
            Mayuri Yadav (B.A.LL.B, LL.M, UGC-NET Qualified), our firm blends
            in-depth legal knowledge with strategic advocacy to protect your
            rights and secure the best possible outcomes.
          </p>

          <p className="text-base text-gray-700 leading-relaxed">
            With expertise spanning Civil, Criminal, Matrimonial, Property, and
            Cheque Bounce matters, we provide comprehensive representation before
            District Courts, Tribunals, High Courts, and the Supreme Court of India.
          </p>
        </div>

        <div className="relative w-fit ml-auto">
          <Image
            src="/profile2.png"
            alt="Mayuri Yadav"
            width={370}
            height={520}
            className="rounded-2xl object-cover"
          />

          <div className="absolute -left-31 bottom-7 rounded-xl shadow-xl">
            <Image
              src="/statue2.png"
              alt="Justice statue"
              width={150}
              height={200}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
