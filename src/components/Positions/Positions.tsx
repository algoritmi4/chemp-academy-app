import { ReactElement } from "react";
import { PositionBlock } from "./PositionBlock";
import { belokamennayaMode, molodezhnayaMode } from "./conts";

export function Positions(): ReactElement {
  return (
    <section className="">
      <PositionBlock metro={{from: 'М. Молодежная', to: 'М. Рабочий Посёлок'}} address='г. Москва, Ул. Ивана Франко 38, 2 этаж' phone='8 (968) 608-47-08' ages="От 4-х лет и старше, мальчики и девочки" mode={molodezhnayaMode} />
      <PositionBlock metro={{from: 'М. Белокаменная', to: 'М. Бульвар Рокоссовского'}} address='г. Москва, Погонный проспект 1к8' phone='8 (985) 437-73-60' ages="От 4-х лет и старше, мальчики и девочки" mode={belokamennayaMode} />
    </section>
  )
}
