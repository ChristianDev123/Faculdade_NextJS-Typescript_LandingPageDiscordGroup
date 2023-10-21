import { HeaderActionMenu, HeaderLogo, HeaderSection } from "./styles";

export default function Header(){
    return(
        <HeaderSection>
            <HeaderLogo icon={<p>Logo Page</p>}/>
            <HeaderActionMenu icon={<p>Open Action</p>}/>
        </HeaderSection>
    )
}