import { ReactElement } from "react";
import { MainForm } from "./MainForm";
import { useNavigate } from "react-router-dom";

export function MainTeaser(): ReactElement {
  const navigate = useNavigate();

  return (
    <section className="bg-teaser-bg bg-cover bg-no-repeat bg-left-of-center bg-blend-multiply bg-[rgba(0,0,0,.30)] text-white font-semibold px-[30px] py-[50px] flex flex-col md:flex-row items-center md:pl-[50px] md:pr-[15px] md:justify-center lg:bg-center lg:py-[90px] xl:py-[120px]">
      <div className="p-2.5 lg:max-w-[550px] xl:max-w-[650px]">
        <h1 className="text-[36px] leading-[1.4em] md:text-[40px] md:font-semibold lg:text-[45px]">Тренируйся с лучшими!<br></br>Стань лучшим!</h1>
        <button type="button" onClick={() => navigate('/o-nas/')} className="py-[17px] px-[30px] border-solid border-red border-3 text-red text-[16px] leading-none font-normal rounded-[30px] mt-5">О нас</button>
      </div>
      <div className="shadow-xl text-[16px] p-5 mt-5 max-w-[345px] self-center lg:p-10 xl:max-w-[420px] xl:ml-20">
        <h3 className="font-semibold lg:text-[20px]">Оставь заявку на пробное бесплатное занятие!</h3>
        <p className="mt-5 mb-6 font-normal">Ведем набор групп с 4-х лет!</p>
        <MainForm />
      </div>
    </section>
  )
}
