import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children:ReactNode
    isSection?:boolean
}

export default function Container({ children, className, isSection,  ...props}:ContainerProps){
    const style = twMerge(
        'w-full h-full',
        className
    )
    return (isSection?
        (<div className={style} {...props}>
            {children}
        </div>)
        :
        (<section className={style} {...props}>
            {children}
        </section>)
    )
}