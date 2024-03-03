import { ReactElement } from "react";
import { GroupBlock } from "./GroupBlock";
import { groupBlocksData } from "../../utils/data";

export function Groups(): ReactElement {
  return (
    <section className="flex flex-col pt-[64px] px-[54px] pb-5 bg-black text-white lg:px-[30px]">
      <h2 className="text-[28px] font-semibold">Уроки Самбо и Дзюдо<br></br>Для всех уровней</h2>
      <div className="w-[64px] border-1 border-red border-solid mt-8"></div>
      <button type="button" className="border-red border-3 border-solid self-start text-[15px] text-red rounded-[30px] px-6 py-3 mt-[70px] leading-none">Узнать больше</button>
      <ul className="lg:flex lg:flex-wrap lg:justify-center">
        {
          groupBlocksData.map((el, index) => <li key={index} className="lg:mr-3 lg:max-w-[320px]"><GroupBlock groupNumber={el.groupNumber} age={el.age} background={el.background} /></li>)
        }
      </ul>
    </section>
  )
}
