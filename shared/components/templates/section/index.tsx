import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  const styles = twMerge(`flex flex-col gap-20 p-10`, className);
  return (
    <section className={styles} {...props}>
      {children}
    </section>
  );
}
