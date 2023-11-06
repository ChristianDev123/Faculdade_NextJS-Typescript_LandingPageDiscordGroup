import Container from "@/shared/components/molecules/container";
import { useState } from "react";
import {
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HeaderActionMenu } from "../../sections/header/styles";
import ShortCuts from "./components/shortcuts";

export default function Sidebar() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);
  return (
    <Container
      className={`
        flex flex-col gap-1
        ${!sideBarIsOpen && "items-center"}
        fixed
        right-0 top-0
        ${sideBarIsOpen ? "w-2/12" : "w-10"} h-screen
        bg-zinc-900
        z-20
    `}
      id="sidebar"
    >
      <HeaderActionMenu
        icon={<GiHamburgerMenu size={24} />}
        onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
        className={sideBarIsOpen ? "m-1" : undefined}
      />
      <ShortCuts
        link="#entryMessage"
        name="Início"
        icon={<AiOutlineHome size={24} />}
        isOpen={sideBarIsOpen}
      />
      <ShortCuts
        link="#aboutUs"
        name="Sobre Nós"
        icon={<AiOutlineInfoCircle size={24} />}
        isOpen={sideBarIsOpen}
      />
      <ShortCuts
        link="#contacts"
        name="Contatos"
        icon={<AiOutlineContacts size={24} />}
        isOpen={sideBarIsOpen}
      />
    </Container>
  );
}
