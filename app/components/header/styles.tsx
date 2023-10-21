'use client'
import { HTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderActionProps extends HTMLAttributes<HTMLDivElement> {
    icon:ReactElement
}

export function HeaderSection({children, className, ...props}:HTMLAttributes<HTMLDivElement>){
    const style = twMerge(
        `
            bg-neutral-950 text-white
            px-2 py-1
            flex items-center justify-between 
        `,
         className
    )
    return (
        <header {...props} className={style}>
            {children}
        </header>
    )
}

export function HeaderLogo({icon, className,...props}:HeaderActionProps){
    const style = twMerge(`border-2 border-white-700 rounded px-2 py-1 my-1 cursor-pointer`, className);
    return (
        <section className={style} {...props}>
            {icon}
        </section>
    )
}

export function HeaderActionMenu({icon, className, ...props}:HeaderActionProps){
    const style = twMerge(
        `
            w-fit rounded p-1
            text-white border-2 border-white-700
            cursor-pointer 
            transition
            duration-300
            hover:rotate-180
        `,
        className
    );
    return (
        <div {...props} className={style}>
            {icon}
        </div>
    )
}