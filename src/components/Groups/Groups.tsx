import { ReactElement } from "react";
import { GroupBlock } from "./GroupBlock";

export function Groups(): ReactElement {
  return (
    <section className="flex flex-col pt-[64px] px-[54px] pb-5 bg-black text-white">
      <h2 className="text-[28px] font-semibold">Уроки Самбо и Дзюдо<br></br>Для все уровней</h2>
      <div className="w-[64px] border-1 border-red border-solid mt-8"></div>
      <button type="button" className="border-red border-3 border-solid self-start text-[15px] text-red rounded-[30px] px-6 py-3 mt-[70px] leading-none">Узнать больше</button>
      <GroupBlock groupNumber="1" age="4-6" background="bg-small-group" />
      <GroupBlock groupNumber="2" age="7-10" background="bg-medium-group" />
      <GroupBlock groupNumber="3" age="12" background="bg-large-group" />
    </section>
  )
}
