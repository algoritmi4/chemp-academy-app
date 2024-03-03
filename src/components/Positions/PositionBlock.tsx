import { ReactElement } from "react";

interface IMetro {
  from: string;
  to: string;
}

interface IMode {
  day: string;
  times: string[];
}

interface IPositionBlockProps {
  iframeSrc: string;
  metro: IMetro;
  address: string;
  phone: string;
  ages: string;
  mode: IMode[];
}

export function PositionBlock({ iframeSrc, metro, address, phone, ages, mode }: IPositionBlockProps): ReactElement {
  return (
    <div className="text-gray-text">
      <div className="w-full h-[755px]">
        <iframe className="w-full h-full" src={iframeSrc}></iframe>
      </div>
      <article className="text-[15px] mt-[30px]">
        <h2 className="text-[22px] font-semibold text-black">{metro.from}<br></br>{metro.to}</h2>
        <p className="mt-2"><strong>Организация: </strong> СК Академия Чемпионов</p>
        <p className="mt-2"><strong>Адрес: </strong>{address}</p>
        <p className="mt-2"><strong>Телефон глав. отдела: </strong>8 (985) 988-96-70</p>
        <p className="mt-2"><strong>Телефон отделения: </strong>{phone}</p>
        <p className="mt-2"><strong>E-mail: </strong></p>
        <p className="mt-2"><strong>Возраст спортсменов: </strong>{ages}</p>
        <div className="flex flex-col mt-3">
          <strong>Режим работы: </strong>
          {
            mode.map((el, index) => (
              <div key={index} className="flex flex-col mt-2">
                <p className="">{el.day}</p>
                {
                  el.times.map((el, index) => <p key={index} className="mt-2">{el}</p>)
                }
              </div>
            ))
          }
        </div>
      </article>
    </div>
  )
}
