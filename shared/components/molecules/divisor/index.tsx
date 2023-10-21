interface DivisorProps {
    section:string
}

export default function Divisor({section}:DivisorProps){
    return (
        <div className="h-8 py-6 flex items-center">
            <hr className='h-full w-full' />
            <h2 className={`px-2 text-lg whitespace-nowrap`}>{section}</h2>
            <hr className='h-full w-full' />
        </div>
    )
}