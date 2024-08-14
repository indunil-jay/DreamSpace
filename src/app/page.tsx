import { IoSparklesSharp } from "react-icons/io5";

export default function Home() {
  return (
    <header className="pt-5 pb-3 h-[5rem] px-2 sm:px-6 relative">
      <div className="flex items-center gap-2">
        <span className="text-[1.875rem] font-semibold">DreamSpace</span>
        <IoSparklesSharp className="size-4" />
      </div>

      <nav></nav>
    </header>
  );
}
