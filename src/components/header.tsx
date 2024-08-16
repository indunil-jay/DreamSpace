"use client";
import { DesktopNavigation } from "@/components/desktop-navigation";
import { Logo } from "@/components/logo";
import { MobileNavigation } from "@/components/mobile-navigaton";

export const Header = () => {
  return (
    <header className="pt-5 pb-3 h-[5rem] side-gutter   relative   ">
      <div className="relative flex justify-between lg:justify-normal">
        <Logo />

        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
};
