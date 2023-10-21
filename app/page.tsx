
import Divisor from "@/shared/components/molecules/divisor";
import LayoutPage from "@/shared/layout";
import AboutUs from "./components/aboutUs";
import EntryMessage from "./components/entryMessage";
import Footer from "./components/footer";

export default function Home(){
  return(
    <LayoutPage>
      <EntryMessage/>
      <Divisor section="Sobre Nós"/>
      <AboutUs/>
      <Footer/>
    </LayoutPage>
  )
}