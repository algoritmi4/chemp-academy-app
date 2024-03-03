import { ReactElement } from "react";
import { PriceBlock } from "./PriceBlock";
import { Title } from "../Title";
import { priceBlockData } from "../../utils/data";

export function Prices(): ReactElement {
  return (
    <section className="pb-[50px]">
      <Title text="Услуги и цены"/>
      <ul className="md:flex md:flex-wrap md:justify-center">
        {
          priceBlockData.map((el, index) => <li key={index} className="md:max-w-[320px]"><PriceBlock title={el.title} text={el.text} price={el.price} /></li>)
        }
      </ul>
    </section>
  )
}
