"use client";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Separator } from "@/components/ui/separator";
import { HiBars3 } from "react-icons/hi2";
import { SmallCompanyTag } from "@/components/compant-tag";
import { HeaderNavigation } from "./header-navigation";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div className="lg:hidden relative">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="z-[99] relative">
          <Button className="px-2 py-2.5" onClick={handleOpen}>
            <HiBars3 className="size-7" />
          </Button>
        </SheetTrigger>

        <SheetContent className="flex flex-col justify-between z-[99999]">
          <VisuallyHidden>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </VisuallyHidden>

          <nav className="mt-10 justify-center flex items-center lg:hidden">
            {/* <NavigationMenu>
              <NavigationMenuList className="flex flex-col gap-4 items-center lg:flex-row lg:gap-0">
                {navigation.map((item) => (
                  <NavigationMenuItem
                    key={item.id}
                    className={cn(
                      "py-3 border-b last:border-none lg:p-0 lg:border-none",
                      pathname === item.url && "border-b-2 border-dark"
                    )}
                  >
                    <Link href={item.url} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "uppercase font-medium text-dark/70 cursor-pointer transition-all",
                          pathname === item.url &&
                            "text-dark lg:underline underline-offset-4 decoration-2",
                          item.bgfill &&
                            "bg-dark/95 text-background-white/85 no-underline hover:text-white hover:bg-dark"
                        )}
                        onClick={handleClose}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu> */}
            <HeaderNavigation onClose={handleClose} />
          </nav>

          <SheetFooter>
            <div className="text-center">
              <Separator />
              <SmallCompanyTag />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
