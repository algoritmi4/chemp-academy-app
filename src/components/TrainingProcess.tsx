import { ReactElement } from "react";
import { AdvantagesBlock } from "./Advantages/AdvantagesBlock";
import { Title } from "./Title";
import { trainingProcessBlocksData } from "../utils/data";

export function TrainingProcess(): ReactElement {
  return (
    <section className="bg-black text-white flex flex-col pb-[84px]">
      <Title text="Как проходит тренировка по дзюдо в “Академии Чемпионов”" />
      <ul className="md:flex md:flex-wrap md:justify-center 2xl:max-w-[1200px] 2xl:self-center">
        {
          trainingProcessBlocksData.map((el, index) => <li key={index} className="md:max-w-[320px] xl:max-w-[360px] 2xl:max-w-[400px]"><AdvantagesBlock image={el.image} title={el.title} text={el.text} /></li>)
        }
      </ul>
    </section>
  )
}
