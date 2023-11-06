import Container from "@/shared/components/molecules/container";
import ListShortcuts from "./component/listShortcuts";

export default function Footer() {
  return (
    <footer>
      <Container isSection className="flex justify-around">
        <ListShortcuts
          options={[{ name: "teste" }, { name: "teste" }, { name: "teste" }]}
          title="Contatos"
        />
        <ListShortcuts
          options={[
            { name: "home", link: "#entryMessage" },
            { name: "Sobre Nós", link: "#aboutUs" },
            { name: "Contatos", link: "#contacts" },
          ]}
          title="Seções"
        />
      </Container>
      <div className="text-center">&copy; Lorem ipsum dolor sit</div>
    </footer>
  );
}
