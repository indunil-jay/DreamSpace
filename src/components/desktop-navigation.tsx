import { HeaderNavigation } from "@/components/header-navigation";

export const DesktopNavigation = () => {
  return (
    <nav className="absolute z-[9999] hidden lg:block top-1/2 -translate-y-1/2 left-0 right-0 mx-auto max-w-fit bg-background-white px-2 py-1 rounded-xl ">
      <HeaderNavigation />
    </nav>
  );
};
