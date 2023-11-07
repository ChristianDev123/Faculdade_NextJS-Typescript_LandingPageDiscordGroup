import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...props }: ButtonProps) {
  const styles = twMerge(
    `
        border-2 border-cyan-800 
        px-2 py-1 rounded
        text-cyan-700
        transition
        hover:bg-cyan-700 hover:text-white
    `,
    className
  );
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
