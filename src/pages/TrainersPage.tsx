import { ReactElement } from "react";
import { Teaser } from "../components/Teaser";
import { Trainers } from "../components/Trainers/Trainers";

function TrainersPage(): ReactElement {
  return (
    <main className="w-full pt-[90px] grow">
      <Teaser text="Тренеры" bgClass="bg-contacts-teaser-bg" />
      <Trainers />
    </main>
  )
}

export default TrainersPage;
