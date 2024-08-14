export const GradientTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex uppercase text-[13px] sm:text-[15px] my-3 py-1 px-3.5 rounded-md border bg-[linear-gradient(to_right,#fab868,#fb1a14,#a182f3)]  text-transparent bg-clip-text font-medium shadow-sm">
      {children}
    </span>
  );
};
