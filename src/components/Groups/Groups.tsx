import { ReactElement } from "react";
import { GroupBlock } from "./GroupBlock";
import { groupBlocksData } from "../../utils/data";

export function Groups(): ReactElement {
  return (
    <section className="bg-groups-bg bg-no-repeat bg-cover flex flex-col px-8 py-10 bg-black text-white rounded-[30px] lg:px-[30px]">
      <h2 className="text-[33px] font-semibold">Уроки Самбо и Дзюдо для всех уровней</h2>
      <button type="button" className="border-white border-2 border-solid self-start text-[23px] font-normal leading-none text-white rounded-[30px] px-5 py-4 mt-4">Узнать больше</button>
      <ul className="lg:flex lg:flex-wrap lg:justify-center">
        {
          groupBlocksData.map((el, index) => <li key={index} className="mt-8 lg:mr-3 lg:max-w-[320px]"><GroupBlock groupNumber={el.groupNumber} age={el.age} background={el.background} /></li>)
        }
      </ul>
    </section>
  )
}
