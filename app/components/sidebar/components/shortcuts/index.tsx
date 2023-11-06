import { HTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface ShortCutsProps extends HTMLAttributes<HTMLDivElement> {
  link: string;
  name: string;
  icon: ReactElement;
  isOpen: boolean;
}

export default function ShortCuts({
  link,
  className,
  name,
  icon: Icon,
  isOpen,
  ...props
}: ShortCutsProps) {
  const style = twMerge(
    `
        flex items-center justify-between
        w-full h-20
        text-slate-500
        text-center
        hover:text-white
        px-2 py-1
    `,
    className
  );

  return (
    <a href={link}>
      <div className={style} {...props}>
        {Icon}
        {isOpen && <p className="w-full text-center">{name}</p>}
      </div>
    </a>
  );
}
