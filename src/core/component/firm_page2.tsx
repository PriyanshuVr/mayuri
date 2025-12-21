import Image from "next/image";

export default function FirmPage2() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 my-20 sm:my-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* IMAGE */}
        <div className="relative w-fit mx-auto lg:mr-auto">
          <Image
            src="/profile2.png"
            alt="Advocate Mayuri Yadav"
            width={380}
            height={420}
            className="rounded-2xl object-cover"
          />

          {/* Floating image */}
          <div className="absolute -right-6 -bottom-10 sm:-right-10 sm:-bottom-15 rounded-xl shadow-xl overflow-hidden">
            <Image
              src="/constitution.png"
              alt="Constitution of India"
              width={180}
              height={180}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-6 max-w-lg">
          <h2 className="font-serif text-gray-800 mb-6 lg:mb-9">
            <span className="block text-3xl sm:text-4xl lg:text-5xl">
              Advocate Mayuri Yadav
            </span>
            <span className="block text-xl sm:text-2xl lg:text-4xl text-gray-600">
              Firm Founder
            </span>
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed">
            Advocate Mayuri Yadav is a legal professional with extensive experience
            in providing legal counsel and representation.
          </p>

          <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-700">
            Academic Qualifications:
          </p>

          <p className="text-gray-700 leading-relaxed">
            Advocate Mayuri Yadav is a legal professional with extensive experience
            in providing legal counsel and representation.
          </p>

          <div className="text-base text-gray-700 space-y-2">
            <div>• LL.M in Criminal Law - Amity University, Noida</div>
            <div>• B.A. LL.B (Hons.) - Maharishi Dayanand University, Rohtak</div>
            <div>• UGC-NET Qualified (2023)</div>
          </div>

          <p className="text-xl sm:text-2xl font-bold text-gray-700">
            Publication:
          </p>

          <p className="text-gray-700 leading-relaxed">
            “Sexual Harassment Against Males: An Ignored Sphere by Society” –
            International Journal for Legal Research and Analysis (ISSN 2582-6433)
          </p>

          <p className="text-xl sm:text-2xl font-bold text-gray-700">
            Dissertation:
          </p>

          <p className="text-gray-700 leading-relaxed">
            “Analytical Study on the Concept of Cyber Crime under Criminal Law of
            India with reference to IT Act, 2000”
          </p>

          <p className="text-xl sm:text-2xl font-bold text-gray-700">
            Professional Strengths:
          </p>

          <p className="text-gray-700 leading-relaxed">
            Known for delivering thorough legal research and preparing compelling
            arguments, contributing to favourable case resolutions. Experienced
            in legal research, case management, and client advocacy, utilizing
            strong analytical skills to develop effective legal strategies.
          </p>
        </div>

      </div>
    </div>
  );
}
