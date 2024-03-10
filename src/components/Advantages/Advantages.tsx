import { ReactElement } from "react";
import { AdvantagesBlock } from "./AdvantagesBlock";
import { advantesBlocksData } from "../../utils/data";

export function Advantages(): ReactElement {
  return (
    <section className="bg-advantages-bg bg-cover bg-no-repeat text-white flex flex-col items-center px-8 pt-8 pb-10 rounded-[30px]">
      <h2 className="text-[33px] font-bold leading-none self-start">Наши преимущества</h2>
      <ul className="md:flex md:flex-wrap md:justify-between 2xl:max-w-[1200px] 2xl:self-center">
        {
          advantesBlocksData.map((el, index) => <li key={index} className="mt-5 md:max-w-[320px] xl:max-w-[360px] 2xl:max-w-[400px]"><AdvantagesBlock image={el.image} title={el.title} text={el.text} /></li>)
        }
      </ul>
    </section>
  )
}
