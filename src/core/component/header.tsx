import { Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <div>
      <div className="flex flex-row items-center justify-end pt-2">
        <Phone size={23} className="text-[#a48a5f]" />
        <p className="text-black mx-2">+91 8750130940</p>
        <Mail size={23} className="text-[#a48a5f]" />
        <p className="text-black mx-2">adv.mayuri97yadav@example.com</p>
      </div>
    </div>
  );
}
