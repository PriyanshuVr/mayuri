"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import menus from "@/core/data/menus.data.json";

export default function Header2() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="mt-10">
      <div className="flex items-center justify-between">

        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={260}
            className="cursor-pointer"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10 tracking-wide">
          {menus.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={index}
                href={item.link}
                className={`font-jost text-sm font-semibold transition-colors
                  ${
                    isActive
                      ? "text-[#a48a5f]"
                      : "text-[#4b453d] hover:text-[#d3c6b3]"
                  }
                `}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#4b453d] font-jost font-extrabold"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-6 flex flex-col gap-4 border-t pt-4">
          {menus.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={index}
                href={item.link}
                onClick={() => setOpen(false)}
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
            );
          })}
        </div>
      )}
    </header>
  );
}
