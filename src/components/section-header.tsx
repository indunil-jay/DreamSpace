import { cn } from "@/lib/utils";

interface HeaderProps {
  underline?: boolean;
  children: React.ReactNode;
  style?: string;
}
export const SectionHeader = ({
  underline = true,
  children,
  style,
}: HeaderProps) => {
  return (
    <h2
      className={cn(
        "md:text-[2.875rem] text-[2.125rem]  font-semibold uppercase ",
        underline && "underline underline-offset-8 decoration-wavy",
        style && style
      )}
    >
      {children}
    </h2>
  );
};
