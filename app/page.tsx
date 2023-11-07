import Divisor from "@/shared/components/molecules/divisor";
import LayoutPage from "@/shared/layout";
import Footer from "./components/footer";
import AboutUs from "./sections/aboutUs";
import Contacts from "./sections/contacts";
import EntryMessage from "./sections/entryMessage";

export default function Home() {
  return (
    <LayoutPage>
      <EntryMessage />
      <Divisor section="Sobre Nós" />
      <AboutUs />
      <Divisor section="Contatos" />
      <Contacts />
      <Footer />
    </LayoutPage>
  );
}
