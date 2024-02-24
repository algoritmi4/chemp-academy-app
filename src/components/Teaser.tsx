import { ReactElement } from "react";

interface ITeaserProps {
  text: string;
  bgClass: string;
}

export function Teaser({ text, bgClass }: ITeaserProps): ReactElement {
  return (
    <section className={`${bgClass} bg-cover bg-center flex flex-col items-center pt-40 pb-20 px-6 bg-[rgba(18,18,18,0.4)] bg-blend-multiply`}>
      <h1 className="text-[28px] font-semibold text-white">{text}</h1>
      <div className="border-1 border-solid border-white w-[64px] mt-[50px]"></div>
    </section>
  )
}
