"use client";
import Sidebar from "../../components/sidebar";
import { HeaderLogo, HeaderSection } from "./styles";

export default function Header() {
  return (
    <HeaderSection>
      <HeaderLogo icon={<p>Logo Page</p>} />
      <Sidebar />
    </HeaderSection>
  );
}
