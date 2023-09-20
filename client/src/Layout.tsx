import { ReactElement } from "react";
import Header from "./components/Header";

interface LayoutProps {
  children: ReactElement;
}

export default function Layout ({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}