import { ReactElement } from "react";
import { TrainerBlock } from "./TrainerBlock";
import { trainerBlocksData } from "../../utils/data";

export function Trainers(): ReactElement {
  return (
    <section className="flex flex-col items-center px-8 max-w-[1200px] mx-auto bg-white pb-10">
      <h2 className="text-[34px] font-bold leading-none">Наши тренеры</h2>
      <ul className="md:flex md:flex-wrap md:justify-center">
        {
          trainerBlocksData.map((el, index) => <li className="mt-8 first-of-type:mt-6" key={index}><TrainerBlock bgClass={el.bgClass} text={el.text} /></li>)
        }
      </ul>
    </section>
  )
}
