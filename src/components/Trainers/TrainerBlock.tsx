import { ReactElement } from "react";

interface ITrainerBlock {
  image: string;
  text: string;
}

export function TrainerBlock({ image, text }: ITrainerBlock): ReactElement {
  return (
    <figure className="px-[30px] mt-[30px]">
      <img src={image} className="" alt={text} />
      <figcaption className="text-[14px] font-semibold mt-5 text-center">{text}</figcaption>
    </figure>
  )
}
