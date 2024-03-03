import { ReactElement } from "react";
import { PositionBlock } from "./PositionBlock";
import { belokamennayaMode, molodezhnayaMode } from "../../utils/data";

export function Positions(): ReactElement {
  return (
    <section className="p-5 md:pt-3 md:pb-10">
      <PositionBlock iframeSrc="https://yandex.ru/map-widget/v1/?azimuth=0.081954590963212&ll=37.424774%2C55.729913&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMDY5OTIzMDg2EkLQoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0YPQu9C40YbQsCDQmNCy0LDQvdCwINCk0YDQsNC90LrQviwgMzgiCg1EqhVCFfrpXkI%2C&tilt=0.013382716309221696&z=14.9" metro={{from: 'М. Молодежная', to: 'М. Рабочий Посёлок'}} address='г. Москва, Ул. Ивана Франко 38, 2 этаж' phone='8 (968) 608-47-08' ages="От 4-х лет и старше, мальчики и девочки" mode={molodezhnayaMode} />
      <div className="border-red border-solid border-1 w-full my-[30px]"></div>
      <PositionBlock iframeSrc="https://yandex.ru/map-widget/v1/?azimuth=0.08195459096321202&ll=37.705933%2C55.819785&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc2NzUxOBI_0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCf0L7Qs9C-0L3QvdGL0Lkg0L_RgNC-0LXQt9C0LCAx0Lo4IgoNhc0WQhUbR19C&tilt=0.060222223391497624&z=15.5" metro={{from: 'М. Белокаменная', to: 'М. Бульвар Рокоссовского'}} address='г. Москва, Погонный проезд 1к8' phone='8 (985) 437-73-60' ages="От 4-х лет и старше, мальчики и девочки" mode={belokamennayaMode} />
    </section>
  )
}
