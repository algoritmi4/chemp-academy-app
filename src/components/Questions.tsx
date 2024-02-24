import { ReactElement } from "react";
import { MainForm } from "./MainForm";

export function Questions(): ReactElement {
  return (
    <section className="bg-black text-white px-5 py-11">
      <h2 className="text-[24px] font-bold mb-2.5 leading-none">Остались вопросы?</h2>
      <MainForm />
      <div className="w-full h-[700px] mt-[60px]">
        <iframe className="w-full h-full" src="https://yandex.ru/map-widget/v1/?um=constructor%3A277c81ca3b28ecfb4f09258cd9a21299b828e169a654eb71f2ece215704f0467&amp;source=constructor"></iframe>
      </div>
    </section>
  )
}
