export default function Footer3() {
  return (
    <div className="bg-white py-24 px-6 md:px-0">
      <h2 className="text-center text-3xl md:text-4xl font-serif mb-16 text-[#3a2f23]">
        Special Focus Areas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 justify-items-start md:justify-items-center max-w-5xl mx-auto">

        <div>
          <div className="flex items-center mb-1">
            <div className="w-2 h-2 bg-[#8f662d] rounded-full mx-2"></div>
            <div className="text-black">Legal Notice & Reply Drafting</div>
          </div>

          <div className="flex items-center mb-1">
            <div className="w-2 h-2 bg-[#8f662d] rounded-full mx-2"></div>
            <div className="text-black">Legal Opinions & Advisory Services</div>
          </div>

          <div className="flex items-center mb-1">
            <div className="w-2 h-2 bg-[#8f662d] rounded-full mx-2"></div>
            <div className="text-black">
              Mediation & Settlement Negotiation
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-1">
            <div className="w-2 h-2 bg-[#8f662d] rounded-full mx-2"></div>
            <div className="text-black">
              Documentation & Registration Services
            </div>
          </div>

          <div className="flex items-center mb-1">
            <div className="w-2 h-2 bg-[#8f662d] rounded-full mx-2"></div>
            <div className="text-black">
              Appeals before High Courts & Supreme Court
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
