import { ReactElement } from "react";
import { AdvantagesBlock } from "./Advantages/AdvantagesBlock";
import { aboutData } from "../utils/data";
import { Title } from "./Title";

export function About(): ReactElement {
  return (
    <section className="flex flex-col pb-[84px]">
      <Title text="О спортивном клубе “Академии Чемпионов”"/>
      <ul className="md:flex md:flex-wrap md:justify-center">
        {
          aboutData.map((el, index) => <li key={index} className="md:max-w-[320px] xl:max-w-[360px]"><AdvantagesBlock image={el.image} title={el.title} text={el.text} /></li>)
        }
      </ul>
    </section>
  )
}
