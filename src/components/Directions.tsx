import { ReactElement } from "react";
import { AdvantagesBlock } from "./Advantages/AdvantagesBlock";
import { directonBlocksData } from "../utils/data";
import { Title } from "./Title";

export function Directions(): ReactElement {
  return (
    <section className="flex flex-col pb-[94px]">
      <Title theme="white" text="Наши главные направления – это обучение технике самбо, дзюдо, самостраховке (умению правильно падать) и акробатике." />
      <ul className="md:flex md:flex-wrap md:justify-center 2xl:max-w-[1200px] 2xl:self-center">
        {
          directonBlocksData.map((el, index) => <li key={index} className="md:max-w-[320px] xl:max-w-[360px] 2xl:max-w-[400px]"><AdvantagesBlock image={el.image} title={el.title} text={el.text} /></li>)
        }
      </ul>
    </section>
  )
}
