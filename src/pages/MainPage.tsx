import { ReactElement } from "react";
import { MainTeaser } from "../components/MainTeaser";
import { Quote } from "../components/Quote";
import { Advantages } from "../components/Advantages/Advantages";
import { Prices } from "../components/Prices/Prices";
import { Trainers } from "../components/Trainers/Trainers";
import { Groups } from "../components/Groups/Groups";
import { About } from "../components/About";
import { Questions } from "../components/Questions";
import { ApplicationPopup } from "../components/ApplicationPopup";

function MainPage(): ReactElement {
  return (
    <main className="w-full pt-[90px] grow">
      <ApplicationPopup />
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

export default MainPage;
