import { ReactElement } from "react";

export function Promotions(): ReactElement {
  return (
    <section className="text-gray-text px-3 pb-5">
      <h2 className="text-[28px] text-black border-b-red border-b-solid border-b-3 mt-3 pb-3 text-center">Акции</h2>
      <ol className="pl-10 list-decimal mt-5">
        <li>При покупке абонемента на 3 месяца предоставляется скидка 10%.</li>
        <li>При покупке абонемента на 1 месяц на 2-х детей из 1 семьи предоставляется скидка 10%.</li>
      </ol>
      <p className="text-center mt-6">*Скидка предоставляется только в случае предъявления свидетельств о рождении.</p>
    </section>
  )
}
