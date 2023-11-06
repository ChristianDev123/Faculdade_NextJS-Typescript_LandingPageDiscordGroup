import Header from "@/app/sections/header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function LayoutPage({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
