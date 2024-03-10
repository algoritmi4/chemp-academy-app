import { ReactElement } from "react";
import { Teaser } from "../components/Teaser";
import { Advantages } from "../components/Advantages/Advantages";
import { Groups } from "../components/Groups/Groups";
import { About } from "../components/About/About";
import { Questions } from "../components/Questions";
import { Directions } from "../components/Directions";
import { Attention } from "../components/Attention";

function AboutUsPage(): ReactElement {
  return (
    <>
      <Teaser text="О нас" bgClass="bg-about-us-teaser-bg"/>
      <Directions />
      <Advantages />
      <Attention />
      <Groups />
      <About />
      <Questions />
    </>
  )
}

export default AboutUsPage;
