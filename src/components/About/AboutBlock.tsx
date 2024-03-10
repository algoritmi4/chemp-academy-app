import { ReactElement } from "react";

interface IAboutBlock {
  image: string;
  title: string;
  text: string;
}

export function AboutBlock({ image, title, text }: IAboutBlock): ReactElement {
  return (
    <figure className="flex flex-col bg-white shadow-prices items-start max-w-[315px] md:min-h-[342px] py-7 px-5 rounded-[30px] md:px-[20px] lg:px-[25px]">
      <img className="h-[65px] object-cover" src={image} alt={title} />
      <figcaption className="flex flex-col mt-2 lg:text-[16px]">
        <h4 className="text-[21px] font-semibold leading-6 uppercase">{title}</h4>
        <p className="text-[15px] leading-5 mt-2">{text}</p>
      </figcaption>
    </figure>
  )
}
