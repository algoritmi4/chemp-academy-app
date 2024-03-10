import { ReactElement } from "react";
import { MainForm } from "./MainForm";

export function Questions(): ReactElement {
  return (
    <section className="bg-about-bg bg-no-repeat bg-cover flex flex-col items-center px-8 py-10 text-white md:flex md:items-center md:justify-between lg:px-10 xl:px-20 xl:justify-center">
      <h2 className="text-[28px] font-bold leading-none">Остались вопросы?</h2>
      <div className="border-white border-solid border-1 rounded-[30px] p-6 mt-10">
        <MainForm />
      </div>
      <div className="w-full h-[470px] max-w-[315px] rounded-[30px] mt-10 md:mt-0 md:max-w-[400px] lg:max-w-[580px] xl:max-w-[700px] xl:ml-10">
        <iframe className="w-full h-full rounded-[30px]" src="https://yandex.ru/map-widget/v1/?um=constructor%3A277c81ca3b28ecfb4f09258cd9a21299b828e169a654eb71f2ece215704f0467&amp;source=constructor"></iframe>
      </div>
    </section>
  )
}
