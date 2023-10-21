import DarkMask from "./components/darkMask";

export function MainImage (){
    return (
        <div className={"bg-[url('assets/mainImage.jpg')] bg-cover bg-no-repeat w-full h-[calc(100vh-52px)] object-contain"}>
            <DarkMask>
                <div className="flex items-center ml-auto h-full w-1/4">
                    <p className="text-white text-xl">
                        Lorem 6ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores ad. Cupiditate itaque aliquam adipisci, consectetur, magni fugit sequi excepturi ipsam nulla non, quam ab iure error ullam mollitia tempore.
                    </p>
                </div>
            </DarkMask>
        </div>
    )
}