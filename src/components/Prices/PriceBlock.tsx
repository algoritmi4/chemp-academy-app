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
    <div className="flex flex-col">
      <figure className="flex flex-col items-center mt-[50px] px-[60px] md:px-[30px]">
        <svg xmlns="https://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"></path></svg>
        <figcaption className="mt-2 flex flex-col">
          <h4 className="text-[22px] font-semibold text-center">{title}</h4>
          <p className="text-[16px] text-gray-text text-center leading-[1.65em] mt-2.5">{text}</p>
        </figcaption>
      </figure>
      <button type="button" onClick={() => dispatch(popupOpened())} className="self-center px-6 py-3 text-red border-solid border-red border-2 rounded-[30px] leading-none mt-10">{price}</button>
    </div>
  )
}
