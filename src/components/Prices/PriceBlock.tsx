import { ReactElement } from "react";
import { useAppDispatch } from "../../utils/hooks";
import { popupOpened } from "../../utils/Slices/ApplicationPopupSlice";

interface IPriceBlock {
  title: string;
  text: string;
  price: string;
}

export function PriceBlock({ title, text, price }: IPriceBlock): ReactElement {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-start rounded-[30px] max-w-[315px] shadow-prices p-5 mt-5">
      <h4 className="text-[23px] font-bold">{title}</h4>
      <p className="text-[15.5px] text-black font-medium leading-5 mt-3">{text}</p>
      <button type="button" onClick={() => dispatch(popupOpened())} className="px-10 py-3 text-green font-bold border-solid border-green border-4 rounded-[30px] leading-none mt-3">{price}</button>
    </div>
  )
}
