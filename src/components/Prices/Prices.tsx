import { ReactElement } from "react";
import { PriceBlock } from "./PriceBlock";
import { priceBlockData } from "../../utils/data";

export function Prices(): ReactElement {
  return (
    <section className="pb-[50px] bg-white flex flex-col items-center px-8 pt-8">
      <h2 className="text-[34px] font-bold">Услуги и цены</h2>
      <ul className="md:flex md:flex-wrap md:justify-center">
        {
          priceBlockData.map((el, index) => <li key={index} className="md:max-w-[320px]"><PriceBlock title={el.title} text={el.text} price={el.price} /></li>)
        }
      </ul>
    </section>
  )
}
