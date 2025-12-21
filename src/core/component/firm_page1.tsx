import Image from "next/image";

export default function FirmPage1() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 sm:mt-28 mb-32 sm:mb-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        
        <div className="space-y-6 max-w-lg">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800 mb-6 lg:mb-9">
            Client-Focused Legal Advocacy
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed">
            Mayuri Yadav and Associates: Client-Focused Legal Advocacy Mayuri
            Yadav and Associates is a new and emerging law firm of lawyers with
            extensive legal experience of more than 4 years, strategically based
            in Delhi/NCR under the leadership and guidance of Mr. Dinesh Chander
            Yadav and A.S Rishi Senior Advocates of Supreme Court of India with an
            experience of more than 30 years. We are a team of dedicated legal
            professionals with a strong commitment to providing effective,
            practical, and client-focused legal solutions.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Over the years, we have developed a reputation for combining thorough
            legal research with practical, result-oriented strategies. We
            continuously stay updated with the latest developments in law and
            jurisprudence to ensure our clients benefit from accurate and
            current legal insights. Our ultimate goal is to not only represent
            but also to empower clients with clarity and confidence throughout
            their legal journey.
          </p>
        </div>

        <div className="relative w-fit mx-auto lg:ml-auto">
          <Image
            src="/statue3.png"
            alt="Supreme Court of India"
            width={380}
            height={420}
            className="rounded-2xl object-cover"
          />

          <div className="absolute sm:-left-10 sm:-bottom-20 -left-12 -bottom-12 rounded-xl shadow-xl overflow-hidden">
            <Image
              src="/writing.png"
              alt="Law Books"
              width={160}
              height={180}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
