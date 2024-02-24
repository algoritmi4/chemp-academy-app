import { ReactElement } from "react";

export function ContactsTeaser(): ReactElement {
  return (
    <section className="bg-contacts-teaser-bg bg-cover bg-center flex flex-col items-center pt-40 pb-20 px-6 bg-[rgba(18,18,18,0.4)] bg-blend-multiply">
      <h1 className="text-[28px] font-semibold text-white">Контакты</h1>
      <div className="border-1 border-solid border-white w-[64px] mt-[50px]"></div>
    </section>
  )
}
