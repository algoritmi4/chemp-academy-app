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
    <div className="text-gray-text md:flex md:justify-center">
      <div className="w-full h-[755px] md:mt-[50px] md:max-w-[350px] lg:max-w-[550px] xl:max-w-[700px]">
        <iframe className="w-full h-full" src={iframeSrc}></iframe>
      </div>
      <article className="text-[15px] mt-[30px] md:text-[16px] md:ml-6 md:mt-3 md:max-w-[430px] lg:text-[17px] lg:ml-10 xl:max-w-[500px] xl:ml-20">
        <h2 className="text-[22px] font-semibold text-black md:text-[26px] lg:text-[28px]">{metro.from}<br></br>{metro.to}</h2>
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
