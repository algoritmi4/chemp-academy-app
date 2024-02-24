import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer";

export function BaseLayout(): ReactElement {
  return (
    <div className="w-full relative flex flex-col h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
