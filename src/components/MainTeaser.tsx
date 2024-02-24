import { ReactElement } from "react";
import { MainForm } from "./MainForm";

export function MainTeaser(): ReactElement {
  return (
    <section className="bg-teaser-bg bg-cover bg-no-repeat bg-left-of-center bg-blend-multiply bg-[rgba(0,0,0,.59)] text-white font-semibold px-[30px] py-[50px]">
      <div className="p-2.5">
        <h1 className="text-[36px] leading-[1.4em]">Тренируйся с лучшими!<br></br>Стань лучшим!</h1>
        <button type="button" className="py-[17px] px-[30px] border-solid border-red border-3 text-red text-[16px] leading-none font-normal rounded-[30px] mt-5">О нас</button>
      </div>
      <div className="shadow-xl text-[17px] p-5 mt-5">
        <h3 className="font-medium">Оставь заявку на пробное бесплатное занятие!</h3>
        <p className="font-thin mt-5 mb-6">Ведем набор групп с 4-х лет!</p>
        <MainForm />
      </div>
    </section>
  )
}
