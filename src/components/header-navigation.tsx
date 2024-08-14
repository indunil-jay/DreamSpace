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

export const HeaderNavigation = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col gap-4  items-center lg:flex-row lg:gap-0  ">
        {navigation.map((item) => (
          <NavigationMenuItem
            key={item.id}
            className={cn(
              "py-3 border-b last:border-none lg:p-0 lg:border-none",
              pathname === item.url && "border-b-2 border-black "
            )}
          >
            <Link href={item.url} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "uppercase font-medium text-foreground-dark/70 cursor-pointer transition-all",
                  pathname === item.url &&
                    "text-foreground-dark lg:underline underline-offset-4 decoration-2",
                  item.bgfill &&
                    "bg-black/90 text-background-white/80 no-underline hover:text-white hover:bg-black"
                )}
              >
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
