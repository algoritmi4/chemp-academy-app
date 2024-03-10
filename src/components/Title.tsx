import { ReactElement } from "react";

interface ITitle {
  text: string;
  theme: 'white' | 'black';
}

export function Title({ text, theme }: ITitle): ReactElement {
  return (
    <h2 className={`text-[28px] font-semibold text-center mx-3 border-b-red border-b-solid border-b-3 mt-3 pb-3 md:text-[32px] lg:text-[36px] ${theme === 'white' ? "text-white" : "text-black"}`}>{text}</h2>
  )
}
