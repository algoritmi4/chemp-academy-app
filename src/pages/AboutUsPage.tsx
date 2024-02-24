import { ReactElement } from "react";
import { Teaser } from "../components/Teaser";
import { Advantages } from "../components/Advantages/Advantages";
import { Groups } from "../components/Groups/Groups";
import { About } from "../components/About";
import { Questions } from "../components/Questions";
import { Directions } from "../components/Directions";
import { Attention } from "../components/Attention/Attention";

export function AboutUsPage(): ReactElement {
  return (
    <main className="w-screen pt-[90px] grow">
      <Teaser text="О нас" bgClass="bg-about-us-teaser-bg"/>
      <Directions />
      <Advantages />
      <Attention />
      <Groups />
      <About />
      <Questions />
    </main>
  )
}
