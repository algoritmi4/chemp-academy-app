import { ReactElement } from "react";
import { Teaser } from "../components/Teaser";
import { Trainers } from "../components/Trainers/Trainers";

export function TrainersPage(): ReactElement {
  return (
    <main className="w-screen pt-[90px] grow">
      <Teaser text="Тренеры" bgClass="bg-contacts-teaser-bg" />
      <Trainers />
    </main>
  )
}
