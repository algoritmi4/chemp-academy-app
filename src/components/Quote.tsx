import { ReactElement } from "react";
import { Title } from "./Title";

export function Quote(): ReactElement {
  return (
    <section className="flex flex-col">
      <Title text="Что нас вдохновляет" />
      <blockquote className="px-6 pt-[55px] pb-10 text-center md:pt-[80px] md:pb-20">
        <p className="font-bold text-[22px] italic md:text-[32px] lg:text-[40px]">“Возможность преодолеть себя -<br></br>без сомнений, самое ценное свойство спорта.”</p>
        <p className="text-gray-text text-[16px] font-normal not-italic mt-10 md:mt-16 lg:text-[18px]">Ольга Корбут</p>
      </blockquote>
    </section>
  )
}
