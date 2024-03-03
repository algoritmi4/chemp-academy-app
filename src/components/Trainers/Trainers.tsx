import { ReactElement } from "react";
import { TrainerBlock } from "./TrainerBlock";
import { trainerBlocksData } from "../../utils/data";

export function Trainers(): ReactElement {
  return (
    <section className="py-[50px] flex flex-col">
      <h2 className="text-[28px] border-b-red border-b-solid border-b-3 mt-3 pb-3 text-center mx-3">Наши тренеры</h2>
      <ul className="md:flex md:flex-wrap md:justify-center">
        {
          trainerBlocksData.map((el, index) => <li key={index}><TrainerBlock image={el.image} text={el.text} /></li>)
        }
      </ul>
    </section>
  )
}
