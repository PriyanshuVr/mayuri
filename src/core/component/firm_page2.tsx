import Image from "next/image";

export default function FirmPage2() {
  return (
    <div className="max-w-6xl mx-auto px-6 my-28">
      <div className="grid grid-cols-2 gap-20 items-center">

        <div className="relative w-fit mr-auto">
          <Image
            src="/profile2.png"
            alt="Supreme Court of India"
            width={380}
            height={420}
            className="rounded-2xl object-cover"
          />

          <div className="absolute -right-10 -bottom-15 rounded-xl shadow-xl overflow-hidden">
            <Image src="/constitution.png" alt="Law Books" width={200} height={200} />
          </div>
        </div>

        <div className="space-y-6 max-w-lg">
          <h2 className="text-5xl font-serif text-gray-800 mb-9">Advocate Mayuri Yadav <span className="text-4xl">Firm Founder</span></h2>

          <p className="text-sm text-gray-700 leading-relaxed">
            Advocate Mayuri Yadav is a legal professional with extensive experience in providing legal counsel and representation.
          </p>
          <p className="text-4xl text-gray-700 leading-relaxed">
            Academic Qualifications:
          </p>
          <p className="text-gray-700 leading-relaxed">
            Advocate Mayuri Yadav is a legal professional with extensive experience in providing legal counsel and representation.
          </p>
          <div className="text-base text-gray-700 space-y-2">
            <div>• LL.M in Criminal Law - Amity University, Noida </div>
            <div>• B.A. LL.B (Hons.) - Maharishi Dayanand University, Rohtak</div>
            <div>• UGC-NET Qualified (2023)</div>
          </div>
          <p className="text-2xl font-bold text-gray-700 leading-relaxed">
            Publication:
          </p>
          <p className="text-gray-700 leading-relaxed">
            “Sexual Harassment Against Males: An Ignored Sphere by Society” - International Journal for Legal Research and Analysis (ISSN 2582-6433)
          </p>
          <p className="text-2xl font-bold text-gray-700 leading-relaxed">
            Dissertation:
          </p>
          <p className="text-gray-700 leading-relaxed">
            “Analytical Study on the Concept of Cyber Crime under Criminal Law of India with reference to IT Act, 2000”
          </p>
          <p className="text-2xl font-bold text-gray-700 leading-relaxed">
            Professional Strengths:
          </p>
          <p className="text-gray-700 leading-relaxed">
            Known for delivering thorough legal research and preparing compelling arguments, contributing to favourable case resolutions. Experienced in legal research, case management, and client advocacy, utilizing strong analytical skills to develop effective legal strategies.
          </p>
        </div>

        
      </div>
    </div>
  );
}
