import { ReactNode } from "react";

interface DarkMaskProps {
    children:ReactNode
}

export default function DarkMask({children}:DarkMaskProps){
    return(
        <div className={'bg-black opacity-60 w-full h-full'}>
            {children}
        </div>
    )
}