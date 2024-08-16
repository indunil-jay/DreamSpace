import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoSparklesSharp } from "react-icons/io5";

export const Logo = () => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 z-[9999]")}>
      <span className="text-[1.575rem] md:text-[1.875rem] font-semibold ">
        DreamSpace
      </span>
      <IoSparklesSharp className="size-4" />
    </Link>
  );
};
