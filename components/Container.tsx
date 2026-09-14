import { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container({ className = "", children, ...rest }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 sm:px-8 ${className}`} {...rest}>
      {children}
    </div>
  );
}
