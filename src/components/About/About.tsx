import { ReactElement } from "react";
import { aboutData } from "../../utils/data";
import { AboutBlock } from "./AboutBlock";

export function About(): ReactElement {
  return (
    <section className="flex flex-col items-center px-8 py-10 bg-blue-spots bg-cover bg-no-repeat">
      <h2 className="text-[32px] font-bold leading-10">О спортивном<br></br>клубе «Академии Чемпионов»</h2>
      <ul className="md:flex md:flex-wrap md:justify-center 2xl:max-w-[1200px] 2xl:self-center">
        {
          aboutData.map((el, index) => <li key={index} className="mt-6 md:max-w-[320px] xl:max-w-[360px] 2xl:max-w-[400px]"><AboutBlock image={''} title={el.title} text={el.text} /></li>)
        }
      </ul>
    </section>
  )
}
