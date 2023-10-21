interface TitleProps {
    children:string
}

export default function Title({children}:TitleProps){
    return (
        <div className="w-fit">
            <h3 className="text-lg">{children}</h3>
            <div className="flex w-full items-center">
                <hr className="w-full"/>
                    <div className="px-2 text-xs">
                        {"//"}
                    </div>
                <hr className="w-full"/>
            </div>
        </div>
    )   
}