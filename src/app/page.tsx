"use client";

import { DesktopNavigation } from "@/components/desktop-navigation";
import { MobileNavigation } from "@/components/mobile-navigaton";
import { IoSparklesSharp } from "react-icons/io5";

export default function Home() {
  return (
    <header className="pt-5 pb-3 h-[5rem] px-2 sm:px-6 ">
      <div className="relative flex justify-between lg:justify-normal">
        <div className="flex items-center gap-2">
          <span className="text-[1.575rem]   md:text-[1.875rem] font-semibold">
            DreamSpace
          </span>
          <IoSparklesSharp className="size-4" />
        </div>

        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
