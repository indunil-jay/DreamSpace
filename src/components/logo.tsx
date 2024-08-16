import { cn } from "@/lib/utils";
import { IoSparklesSharp } from "react-icons/io5";

export const Logo = ({ color = "dark" }: { color?: "light" | "dark" }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 z-[9999]",
        color === "dark" ? "text-dark" : "text-white"
      )}
    >
      <span className="text-[1.575rem] md:text-[1.875rem] font-semibold ">
        DreamSpace
      </span>
      <IoSparklesSharp className="size-4" />
    </div>
  );
};
