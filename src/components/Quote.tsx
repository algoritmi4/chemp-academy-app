import { ReactElement } from "react";

export function Quote(): ReactElement {
  return (
    <section className="flex flex-col">
      <h2 className="text-[28px] font-semibold text-center mx-3 border-b-red border-b-solid border-b-3 mt-3 pb-3">Что нас вдохновляет</h2>
      <blockquote className="px-6 pt-[55px] pb-10 text-center">
        <p className="font-bold text-[22px] italic">“Возможность преодолеть себя – без сомнений, самое ценное свойство спорта.”</p>
        <p className="text-gray-text text-[16px] text-normal not-italic mt-10">Ольга Корбут</p>
      </blockquote>
    </section>
  )
}
