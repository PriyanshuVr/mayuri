"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import menus from "@/core/data/menus.data.json";

export default function Header2() {
  const pathname = usePathname();

  return (
    <div>
      <div className="grid grid-cols-2 gap-9 mt-10">
        <div className="justify-items-start">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={370}
              height={370}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-5 items-center justify-items-center">
          {menus.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <div key={index}>
                <Link
                  href={item.link}
                  className={`text-sm font-semibold transition-colors
                        ${
                          isActive
                            ? "text-[#a48a5f]"
                            : "text-[#4b453d] hover:text-[#d3c6b3]"
                        }
                        `}
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
