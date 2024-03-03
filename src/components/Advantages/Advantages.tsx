import { ReactElement } from "react";
import { AdvantagesBlock } from "./AdvantagesBlock";
import { Title } from "../Title";
import { advantesBlocksData } from "../../utils/data";

export function Advantages(): ReactElement {
  return (
    <section className="bg-black text-white flex flex-col pb-[84px]">
      <Title text="Наши преимущества"/>
      <ul className="md:flex md:flex-wrap md:justify-center">
        {
          advantesBlocksData.map((el, index) => <li key={index} className="md:max-w-[320px] xl:max-w-[360px]"><AdvantagesBlock image={el.image} title={el.title} text={el.text} /></li>)
        }
      </ul>
    </section>
  )
}
