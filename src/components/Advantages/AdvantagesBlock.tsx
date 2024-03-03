import { ReactElement } from "react";

interface IAdvantagesBlock {
  image: string;
  title: string;
  text: string;
}

export function AdvantagesBlock({ image, title, text }: IAdvantagesBlock): ReactElement {
  return (
    <figure className="flex flex-col items-center mt-[30px] px-[42px] md:px-[20px] lg:px-[25px]">
      <img src={image} alt={title} />
      <figcaption className="flex flex-col items-center mt-5 text-[14px] lg:text-[16px]">
        <h4 className="font-semibold text-center">{title}</h4>
        <p className="text-center mt-5 leading-[1.65em]">{text}</p>
      </figcaption>
    </figure>
  )
}
