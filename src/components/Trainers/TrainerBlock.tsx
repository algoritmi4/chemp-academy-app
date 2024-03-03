import { ReactElement } from "react";

interface ITrainerBlock {
  image: string;
  text: string;
}

export function TrainerBlock({ image, text }: ITrainerBlock): ReactElement {
  return (
    <figure className="px-[30px] mt-[30px] self-center flex flex-col items-center">
      <img src={image} className="max-w-[260px] sm:max-w-[400px] md:max-w-[300px] lg:max-w-[400px]" alt={text} />
      <figcaption className="text-[14px] font-semibold mt-5 text-center">{text}</figcaption>
    </figure>
  )
}
