import { ReactElement } from "react";
import { MainTeaser } from "../components/MainTeaser";
import { Quote } from "../components/Quote";
import { Advantages } from "../components/Advantages/Advantages";
import { Prices } from "../components/Prices/Prices";
import { Trainers } from "../components/Trainers/Trainers";
import { Groups } from "../components/Groups/Groups";
import { About } from "../components/About";
import { Questions } from "../components/Questions";

export function MainPage(): ReactElement {
  return (
    <main className="w-screen pt-[90px] grow">
      <MainTeaser />
      <Quote />
      <Advantages />
      <Prices />
      <Trainers />
      <Groups />
      <About />
      <Questions />
    </main>
  )
}
