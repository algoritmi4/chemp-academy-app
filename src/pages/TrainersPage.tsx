import { ReactElement } from "react";
import { Teaser } from "../components/Teaser";
import { Trainers } from "../components/Trainers/Trainers";

function TrainersPage(): ReactElement {
  return (
    <>
      <Teaser text="Тренеры" bgClass="bg-contacts-teaser-bg" />
      <Trainers />
    </>
  )
}

export default TrainersPage;
