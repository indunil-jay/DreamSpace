import { cn } from "@/lib/utils";
import { GradientTag } from "./gradient-tag";

interface HeaderProps {
  tag: string;
  headerUnderline?: boolean;
  title: string;
  paragraphText: string;
  paragraphTextColor?: "light" | "dark";
}

export const SectionHeader = ({
  tag,
  headerUnderline = true,
  title,
  paragraphText,
  paragraphTextColor = "dark",
}: HeaderProps) => {
  return (
    <div className="text-center max-w-screen-md mx-auto w-full md:px-6 px-2">
      <SectionTag tag={tag} />
      <SectionTitle underline={headerUnderline} title={title} />
      <SectionParagraph
        paragraphText={paragraphText}
        paragraphTextColor={paragraphTextColor}
      />
    </div>
  );
};

const SectionTag = ({ tag }: { tag: string }) => {
  return <GradientTag>{tag}</GradientTag>;
};

const SectionTitle = ({
  title,
  underline,
}: {
  title: string;
  underline: boolean;
}) => {
  return (
    <h2
      className={cn(
        "md:text-[2.875rem] text-[2.125rem]  font-semibold uppercase ",
        underline && "underline underline-offset-8 decoration-wavy"
      )}
    >
      {title}
    </h2>
  );
};

const SectionParagraph = ({
  paragraphText,
  paragraphTextColor,
}: {
  paragraphText: string;
  paragraphTextColor: "light" | "dark";
}) => {
  return (
    <p
      className={cn(
        "text-[13px]  font-medium mt-8",
        paragraphTextColor === "light" && "text-white/70",
        paragraphTextColor === "dark" && "text-dark/70"
      )}
    >
      &#10075;&#10075;{paragraphText}&#10076;&#10076;
    </p>
  );
};
