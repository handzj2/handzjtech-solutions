type SectionHeadingProps = {
  as?: "h1" | "h2" | "h3";
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use on dark section backgrounds */
  tone?: "light" | "dark";
};

export default function SectionHeading({
  as = "h2",
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const Heading = as;
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const descColor = tone === "dark" ? "text-white/70" : "text-ink/70";

  const headingSize =
    as === "h1"
      ? "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
      : as === "h2"
        ? "text-2xl font-semibold tracking-tight sm:text-3xl"
        : "text-xl font-semibold tracking-tight sm:text-2xl";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <Heading className={`${headingSize} ${titleColor}`}>{title}</Heading>
      {description ? (
        <p className={`mt-3 text-base leading-relaxed sm:text-[1.05rem] ${descColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
