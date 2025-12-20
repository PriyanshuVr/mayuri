export default function Footer3() {
  return (
    <div className="bg-white py-24">
      <h2 className="text-center text-4xl font-serif mb-16 text-[#3a2f23]">
        Special Focus Areas
      </h2>
      <div className="grid grid-cols-2 justify-items-center">
        <div>
          <div className="flex items-center mb-0.5">
            <div className="w-2 h-2 bg-[#8f662d] rounded-full mx-2"></div>
            <div className="text-black">Legal Notice & Reply Drafting</div>
          </div>
          <div className="flex items-center mb-0.5">
            <div className="w-2 h-2 bg-[#8f662d] rounded-full mx-2"></div>
            <div className="text-black">Legal Opinions & Advisory Services</div>
          </div>
          <div className="flex items-center mb-0.5">
            <div className="w-2 h-2 bg-[#8f662d] rounded-full mx-2"></div>
            <div className="text-black">Mediation & Settlement Negotiation</div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-0.5">
            <div className="w-2 h-2 bg-[#8f662d] rounded-full mx-2"></div>
            <div className="text-black">
              Documentation & Registration Services
            </div>
          </div>
          <div className="flex items-center mb-0.5">
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
