import { ReactElement } from "react";
import { SlickSlider } from "./SlickSlider";
import { firstSliderSrcList } from "./consts";

export function GallerySliders(): ReactElement {
  const firstSliderChild = firstSliderSrcList.map((el, index) => <div key={index} className="h-[400px] w-1/2 mr-2"><img className="object-cover h-full" src={el.src} alt={`Тренировочный процесс в Академии Чемпионов - ${el.alt}`} /></div>);

  return (
    <section className="flex flex-col px-5">
      <div className="border-red border-solid border-1 my-3"></div>
      <SlickSlider>
        {firstSliderChild}
      </SlickSlider>
      <div className="border-red border-solid border-1 my-3"></div>
      <SlickSlider>
        {firstSliderChild}
      </SlickSlider>
      <div className="border-red border-solid border-1 my-3"></div>
    </section>
  )
}
