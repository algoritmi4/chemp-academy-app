import { ReactElement } from "react";

interface ITrainerBlock {
  bgClass: string;
  text: string;
}

export function TrainerBlock({ bgClass, text }: ITrainerBlock): ReactElement {
  return (
    <div className={`${bgClass} bg-no-repeat bg-center bg-cover min-h-[315px] min-w-[315px] flex items-end p-5 rounded-[30px] shadow-prices`}>
      <h3 className="text-[22px] text-white font-bold whitespace-pre">{text}</h3>
    </div>
  )
}
