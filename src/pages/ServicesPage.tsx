import { ReactElement } from "react";
import { Teaser } from "../components/Teaser";
import { Prices } from "../components/Prices/Prices";
import { Questions } from "../components/Questions";
import { TrainingProcess } from "../components/TrainingProcess";
import { Promotions } from "../components/Promotions";

export function ServicesPage(): ReactElement {
  return (
    <main className="w-screen pt-[90px] grow">
      <Teaser text="Услуги и цены" bgClass="bg-services-teaser-bg" />
      <Prices />
      <TrainingProcess />
      <Promotions />
      <Questions />
    </main>
  )
}
