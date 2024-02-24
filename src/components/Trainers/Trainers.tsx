import { ReactElement } from "react";
import { TrainerBlock } from "./TrainerBlock";
import trainer1 from '../../images/trainer-1-1024x0124.jpg';
import trainer2 from '../../images/trainer-2-1024x1024.jpg';

export function Trainers(): ReactElement {
  return (
    <section className="py-[50px]">
      <h2 className="text-[28px] border-b-red border-b-solid border-b-3 mt-3 pb-3 text-center mx-3">Наши тренеры</h2>
      <TrainerBlock image={trainer1} text="Николай Егорович Булдаков"/>
      <TrainerBlock image={trainer2} text="Иван Андреевич Свиридов"/>
    </section>
  )
}
