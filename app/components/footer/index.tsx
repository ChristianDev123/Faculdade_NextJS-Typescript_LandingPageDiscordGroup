import Container from "@/shared/components/molecules/container";
import ListShortcuts from "./component/listShortcuts";




export default function Footer(){
    return (
        <footer>
            <Container
                isSection
                className="flex justify-around"
            >
                <ListShortcuts options={[{name:'teste'},{name:'teste'},{name:'teste'}]} title="Contatos"/>
                <ListShortcuts options={[{name:'teste'},{name:'teste'},{name:'teste'}]} title='Seções'/>
            </Container>
            <div className="text-center">
                &copy; Lorem ipsum dolor sit
            </div>
        </footer>
    )
}