import PhoneIcon from "@/core/component/icons/icon_phone.svg";
import MailIcon from "@/core/component/icons/icon_email.svg";

export default function Header() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start justify-start lg:justify-end pt-2 gap-2 sm:gap-0">
        
        <div className="flex items-center">
          <PhoneIcon className="w-6 h-6 text-[#a48a5f]" />
          <p className="text-black mx-5">+91 8750130940</p>
        </div>

        <div className="flex items-center">
          <MailIcon className="w-6 h-6 text-[#a48a5f]" />
          <p className="text-black mx-2 break-all sm:break-normal">
            adv.mayuri97yadav@gmail.com
          </p>
        </div>

      </div>
    </div>
  );
}
