import Image from "next/image";
import Link from "next/link";

const menu = [
  {
    title: "CIVIL LAW",
    image: "/GridMenu/Layer1.jpg",
  },
  {
    title: "CRIMINAL LAW",
    image: "/GridMenu/Layer2.jpg",
  },
  {
    title: "MATRIMONIAL & FAMILY LAW",
    image: "/GridMenu/Layer3.jpg",
  },
  {
    title: "CHEQUE BOUNCE & FINANCIAL DISPUTES",
    image: "/GridMenu/Layer4.jpg",
  },
  {
    title: "CONSUMER PROTECTION & SERVICE MATTERS",
    image: "/GridMenu/Layer5.jpg",
  },
  {
    title: "CORPORATE & COMMERCIAL LAW",
    image: "/GridMenu/Layer6.jpg",
  },
  {
    title: "CONSTITUTIONAL LAW",
    image: "/GridMenu/Layer7.jpg",
  },
  {
    title: "TAXATION LAW",
    image: "/GridMenu/Layer8.jpg",
  },
];

export default function GridMenu() {
  return (
    <div className="bg-[#f7f2ec] py-12">
      <h2 className="text-left text-[74px] font-serif mb-13 text-[#3a2f23]">
        Legal Practice Areas
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {menu.map((item, index) => (
          <div className="w-[370px]">
            <div className="relative w-full h-[250px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-lora my-5 text-[#372d1f] font-semibold">{item.title}</h3>
            <Link href="/PracticeAreas">
              <p className="font-jost text-[#8f6f2d] font-medium">LEARN MORE →</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
