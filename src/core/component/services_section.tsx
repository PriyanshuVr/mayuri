import Image from "next/image";

const services = [
  {
    title: "Civil Law",
    description:
      "Our firm represents clients in all types of civil disputes with precision and strategy",
    points: [
      "Property & Partition Disputes",
      "Injunctions & Recovery Suits",
      "Contract Drafting & Enforcement",
      "Breach of Contract & Specific Performance",
      "Defamation & Negligence Claims",
      "Landlord-Tenant Disputes (Eviction Suits)",
      "Will, Trust, Gift Deed & Probate Matters",
      "Consumer Protection Cases",
      "Declaratory Suits & Permanent Injunctions",
      "Recovery of Money / Financial Claims",
    ],
    image: "/GridMenu/Layer1.jpg",
  },
  {
    title: "Criminal Law",
    description:
      "We provide strong advocacy and support in defending rights under criminal law.",
    points: [
      "Bail & Anticipatory Bail Petitions",
      "Criminal Trials before Magistrate & Sessions Courts",
      "FIR Quashing & Criminal Revisions in High Courts",
      "Section 498A IPC (Dowry & Domestic Violence Cases)",
      "POCSO & Sexual Offence Matters",
      "Cheating, Forgery & Fraud Cases",
      "Theft, Robbery, and Culpable Homicide",
      "Defamation (Criminal)",
      "Appeals and Revisions before Higher Courts",
    ],
    image: "/GridMenu/Layer2.jpg",
  },
  {
    title: "Matrimonial & Family Law",
    description:
      "We provide compassionate, confidential, and strategic support in all family and matrimonial disputes.",
    points: [
      "Contested & Mutual Divorce",
      "Alimony, Maintenance & Interim Reliefs",
      "Domestic Violence & Dowry Harassment Matters",
      "Judicial Separation & Restitution of Conjugal Rights (RCR)",
      "Marriage Registration & Annulment",
      "Child Custody & Visitation Rights",
      "Adoption & Guardianship",
      "Succession, Inheritance & Will Disputes",
      "Mediation & Conciliation Proceedings",
    ],
    image: "/GridMenu/Layer3.jpg",
  },
  {
    title: "Cheque Bounce & Financial Disputes",
    description:
      "We specialize in Section 138 of the Negotiable Instruments Act, offering end-to-end legal assistance for complainants and accused alike.",
    points: [
      "Drafting & Sending Legal Notices",
      "Filing of Cheque Bounce Complaints",
      "Bail & Compounding Applications",
      "Defence & Cross-Examination of Witnesses",
      "Appeals and Revisions",
      "Negotiation & Settlement Assistance",
      "Recovery Suits & Execution of Decrees",
    ],
    image: "/GridMenu/Layer4.jpg",
  },
  {
    title: "Consumer Protection & Service Matters",
    description:
      "We represent consumers in complaints against unfair trade practices and defective services before all consumer forums.",
    points: [
      "Filing & Defending Consumer Complaints",
      "Deficiency in Service or Defective Goods Cases",
      "Insurance Claim Disputes",
      "E-commerce & Online Transaction Fraud",
      "Appeals before State & National Consumer Commissions",
    ],
    image: "/GridMenu/Layer5.jpg",
  },
  {
    title: "Corporate & Commercial Law",
    description:
      "Our firm offers tailored legal solutions for business clients, startups, and companies.",
    points: [
      "Contract & Agreement Drafting",
      "Partnership Deeds & Shareholder Agreements",
      "Legal Compliance for Businesses",
      "Company Incorporation & Documentation",
      "Non-Disclosure & Employment Agreements",
      "Arbitration & Dispute Resolution",
      "Recovery of Dues from Vendors or Partners",
      "Legal Opinions for Business Transactions",
    ],
    image: "/GridMenu/Layer6.jpg",
  },
  {
    title: "Constitutional Law",
    description:
      "We provide specialized representation and legal opinions on matters involving fundamental rights, writ petitions, and constitutional interpretation before High Courts and the Supreme Court of India.",
    points: [
      "Filing of **Writ Petitions** (Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto)",
      "Cases involving **Fundamental Rights** (Article 14, 19, 21, etc.)",
      "Domestic Violence & Dowry Harassment Matters",
      "Interlocutory applications and Appeals before the Supreme Court",
      "Constitutional validity challenges of statutes and government actions",
    ],
    image: "/GridMenu/Layer7.jpg",
  },
  {
    title: "Taxation Law",
    description:
      "​Our firm offers comprehensive advisory and litigation services for direct and indirect tax disputes for both individuals and businesses.",
    points: [
      "Representation before Income Tax Authorities (Appeals, Assessments)",
      "Litigation concerning **Goods and Services Tax (GST)**",
      "Filing and defending Appeals before Tax Tribunals",
      "Advisory on tax compliance and planning",
      "Appeals before the High Courts on tax-related matters",
    ],
    image: "/GridMenu/Layer8.jpg",
  },
];

export default function ServicesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20 sm:space-y-28">
      {services.map((service, index) => {
        const isReverse = index % 2 !== 0;
        return (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-stretch"
          >

            <div className={isReverse ? "lg:order-2" : ""}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight font-serif text-[#372d1f] mb-3">
                {service.title}
              </h2>

              <p className="text-gray-600 max-w-lg mb-6 text-[15px] sm:text-[17px] leading-relaxed">
                {service.description}
              </p>

              <h4 className="font-semibold text-gray-900 mb-4">
                Services include:
              </h4>

              <div className="space-y-2">
                {service.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#a48a5f] shrink-0"></div>

                    <div className="text-gray-800 text-[13px] sm:text-[14px] leading-relaxed">
                      {point.split("**").map((text, i) =>
                        i % 2 === 1 ? (
                          <strong key={i} className="font-semibold">
                            {text}
                          </strong>
                        ) : (
                          <span key={i}>{text}</span>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`flex ${
                isReverse ? "lg:justify-start" : "lg:justify-end"
              } ${isReverse ? "lg:order-1" : ""}`}
            >
              <div className="relative w-full max-w-md lg:max-w-none h-64 sm:h-80 lg:h-full rounded-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
