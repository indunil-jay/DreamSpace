"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navigation } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSparklesSharp } from "react-icons/io5";

export default function Home() {
  const pathname = usePathname();
  return (
    <header className="pt-5 pb-3 h-[5rem] px-2 sm:px-6 ">
      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="text-[1.875rem] font-semibold">DreamSpace</span>
          <IoSparklesSharp className="size-4" />
        </div>

        <nav className="absolute top-1/2 -translate-y-1/2 left-0 right-0 mx-auto max-w-fit bg-background-white px-2 py-0.5 rounded-full  ">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <Link href={item.url} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "uppercase font-medium text-foreground-dark/70 cursor-pointer transition-all",
                        pathname === item.url &&
                          "text-foreground-dark underline underline-offset-4 decoration-2",
                        item.bgfill &&
                          "bg-black/90 text-background-white/80 hover:text-white hover:bg-black"
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
}
