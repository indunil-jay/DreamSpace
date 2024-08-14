import { Circle3 } from "@/components/design/circl3";

export const PortfolioHero = () => {
  return (
    <section className="pt-10 ">
      <div className="text-center max-w-screen-md mx-auto w-full side-gutter relative ">
        <h1 className="heading-main mt-2">
          Showcasing Our Interior Masterpieces
        </h1>
        <div className="mt-4 w-[85%] mx-auto">
          <p className="text-sm text-dark/90 ">
            Explore our curated portfolio of beautifully designed spaces. From
            modern offices to elegant homes, each project reflects our
            commitment to quality, creativity, and attention to detail. Discover
            the transformative power of exceptional interior design
          </p>
        </div>
        <Circle3 />
      </div>
    </section>
  );
};
