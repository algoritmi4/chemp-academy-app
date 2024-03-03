import { ReactElement } from "react";
import { TrainerBlock } from "./TrainerBlock";
import { trainerBlocksData } from "../../utils/data";
import { Title } from "../Title";

export function Trainers(): ReactElement {
  return (
    <section className="py-[50px] flex flex-col max-w-[1200px] mx-auto">
      <Title text="Наши тренеры" />
      <ul className="md:flex md:flex-wrap md:justify-center">
        {
          trainerBlocksData.map((el, index) => <li key={index}><TrainerBlock image={el.image} text={el.text} /></li>)
        }
      </ul>
    </section>
  )
}
