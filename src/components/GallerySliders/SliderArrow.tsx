import { ReactElement } from "react";

interface ISliderArrow {
  onClick?: () => void;
  prev: boolean;
}

export function SliderArrow({ onClick, prev }: ISliderArrow): ReactElement {
  return (
    <button type="button" onClick={onClick} className={`absolute bg-blue p-[15px] z-10 cursor-pointer rounded-circle top-[180px] ${prev ? "rotate-180 left-0" : "right-4"}`}>
      <svg viewBox="0 0 130 130" width={32} height={32} fill="#FFF" xmlns="http://www.w3.org/2000/svg"><path d="m5.34375 99.09375-4.4375-4.4375 44.6875-44.65625-44.6875-44.65625 4.4375-4.4375 46.875 46.875c1.2116362 1.218867 1.2116362 3.187383 0 4.40625z" transform="translate(39.875 15)"/></svg>
    </button>
  )
}
