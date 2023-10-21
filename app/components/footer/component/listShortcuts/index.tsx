interface option {
    name:string
    isLink?:boolean
    link?:string
}

interface ListShortcutsProps {
    title:string
    options:option[]
}

export default function ListShortcuts({options,title}:ListShortcutsProps){
    return(
        <div>
            <h4>{title}</h4>
            <ul>
                {options.map(({isLink,name, link}, index)=>(
                    <li key={index}>
                        {isLink?
                        (<a href={link}>{name}</a>):(name)}
                    </li>
                ))}
            </ul>
        </div>
    )
}