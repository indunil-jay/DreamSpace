import {
  Sheet,
  SheetClose,
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
import { HeaderNavigation } from "@/components/header-navigation";
import { SmallCompanyTag } from "@/components/compant-tag";

export const MobileNavigation = () => {
  return (
    <div className="lg:hidden relative">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="px-2 py-2.5">
            <HiBars3 className="size-7" />
          </Button>
        </SheetTrigger>

        <SheetContent className="flex flex-col justify-between">
          {/* to fix unexpected console error in when using sheet component */}
          <VisuallyHidden>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </VisuallyHidden>

          <nav className="mt-10 justify-center flex items-center lg:hidden">
            <SheetClose asChild>
              <HeaderNavigation />
            </SheetClose>
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
