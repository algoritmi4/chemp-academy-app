import { ReactElement } from "react";
import { Title } from "./Title";

export function Promotions(): ReactElement {
  return (
    <section className="text-gray-text px-3 pb-5">
      <Title text="Акции" />
      <ol className="pl-10 list-decimal mt-5">
        <li>При покупке абонемента на 3 месяца предоставляется скидка 10%.</li>
        <li>При покупке абонемента на 1 месяц на 2-х детей из 1 семьи предоставляется скидка 10%.</li>
      </ol>
      <p className="mt-6">*Скидка предоставляется только в случае предъявления свидетельств о рождении.</p>
    </section>
  )
}
