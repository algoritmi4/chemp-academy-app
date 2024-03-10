import { ReactElement } from "react";
import { MainForm } from "./MainForm";
import { useNavigate } from "react-router-dom";

export function MainTeaser(): ReactElement {
  const navigate = useNavigate();

  return (
    <section className="bg-teaser-bg bg-cover bg-no-repeat bg-left-of-center bg-blend-multiply bg-[rgba(0,0,0,.15)] shadow-inset-top text-white font-semibold px-8 py-[50px] flex flex-col items-center rounded-[30px] md:flex-row md:pl-[50px] md:pr-[15px] md:justify-center lg:bg-center lg:py-[90px] xl:py-[120px]">
      <div className="w-full lg:max-w-[550px] xl:max-w-[650px]">
        <h1 className="text-[23px] font-extrabold leading-[1.4em] md:text-[40px] md:font-semibold lg:text-[45px]">Тренируйся с лучшими!<br></br><span className="text-red">Стань лучшим!</span></h1>
        <button type="button" onClick={() => navigate('/o-nas/')} className="py-[10px] px-[25px] border-solid border-white border-4 text-white text-[18px] leading-none font-semibold rounded-[30px] mt-7">О нас</button>
      </div>
      <div className="w-full font-semibold border-white border-solid border-1 rounded-[30px] backdrop-blur-[5px] text-[16px] py-7 px-6 mt-10 self-center lg:p-10 xl:max-w-[420px] xl:ml-20">
        <h3 className="lg:text-[20px]">Оставь заявку на пробное бесплатное занятие!</h3>
        <p className="my-3">Ведем набор групп с 4-х лет!</p>
        <MainForm />
      </div>
    </section>
  )
}
