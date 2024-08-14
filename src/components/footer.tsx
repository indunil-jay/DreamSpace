import { GiWorld } from "react-icons/gi";
import { IoSparklesSharp } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="overflow-clip">
      <div className="flex flex-col ">
        <div className="bg-dark text-white min-h-[440px] h-full flex justify-between flex-col py-10">
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row p-10 items-center justify-between">
            <div className=" ">
              <span className="text-[1.8rem]  md:text-[2.2rem]  underline underline-offset-8">
                info@DreamSpace.com
              </span>
            </div>
            <div className="bg-yellow-cs py-10 px-6 rounded-2xl">
              <div className=" bg-dark px-10 py-5  rounded-3xl ">
                <h4 className="font-semibold text-[1.8rem]">Office</h4>
                <span className="block text-[13px] font-light text-white/70">
                  119 2/5 Prince Street, 11
                </span>
                <span className="block text-[13px] font-light text-white/70">
                  Colombo 05
                </span>
                <span className="block text-[13px] font-light text-white/70">
                  Sri lanka
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center justify-center pointer-events-none ">
            <span className="font-medium text-[3rem] md:text-[4rem] lg:text-[8.75rem]">
              DreamSpace
            </span>
            <IoSparklesSharp className="size-10 md:size-16" />
          </div>
        </div>

        <div className="bg-purple-cs text-white/80 min-h-[100px] h-full flex justify-center items-center">
          <div className="flex items-center gap-2">
            <GiWorld className="size-3" />
            <span>www.dreamspace.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
