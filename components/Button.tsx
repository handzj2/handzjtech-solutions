import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-[44px] items-center justify-center rounded px-5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary:
    "border border-mist bg-white text-ink hover:border-brand hover:text-brand",
};

type LinkButtonProps = {
  variant?: Variant;
  href: string;
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = {
  variant?: Variant;
  href?: undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const { variant = "primary", className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external, ...anchorRest } = rest as LinkButtonProps;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorRest}
        />
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {props.children}
      </Link>
    );
  }

  const { ...buttonRest } = rest as NativeButtonProps;
  return <button className={classes} {...buttonRest} />;
}
