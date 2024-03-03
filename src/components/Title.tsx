import { ReactElement } from "react";

interface ITitle {
  text: string;
}

export function Title({ text }: ITitle): ReactElement {
  return (
    <h2 className="text-[28px] font-semibold text-center mx-3 border-b-red border-b-solid border-b-3 mt-3 pb-3 md:text-[32px] lg:text-[36px]">{text}</h2>
  )
}
