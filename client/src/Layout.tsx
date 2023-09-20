import { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

export default function Layout ({ children }: LayoutProps) {
  return (
    <>
      <h1>Layout</h1>
      {children}
    </>
  );
}