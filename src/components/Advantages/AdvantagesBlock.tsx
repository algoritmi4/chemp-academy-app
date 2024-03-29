import { ReactElement } from "react";

interface IAdvantagesBlock {
  image: string;
  title: string;
  text: string;
}

export function AdvantagesBlock({ image, title, text }: IAdvantagesBlock): ReactElement {
  return (
    <figure className="flex flex-col backdrop-blur-[5px] items-start max-w-[315px] md:min-h-[342px] py-7 px-5 border-solid border-white border-1 rounded-[30px] md:px-[20px] lg:px-[25px]">
      <img className="h-[65px] object-cover" src={image} alt={title} />
      <figcaption className="flex flex-col mt-2 lg:text-[16px]">
        <h4 className="text-[21px] font-semibold leading-6 uppercase">{title}</h4>
        <p className="text-[15px] leading-5 mt-2">{text}</p>
      </figcaption>
    </figure>
  )
}
