import { Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start justify-start lg:justify-end pt-2 gap-2 sm:gap-0">
        
        <div className="flex items-center">
          <Phone size={23} className="text-[#a48a5f]" />
          <p className="text-black mx-2">+91 8750130940</p>
        </div>

        <div className="flex items-center">
          <Mail size={23} className="text-[#a48a5f]" />
          <p className="text-black mx-2 break-all sm:break-normal">
            adv.mayuri97yadav@gmail.com
          </p>
        </div>

      </div>
    </div>
  );
}
