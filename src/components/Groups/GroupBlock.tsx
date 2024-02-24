import { ReactElement } from "react";

interface IGroupBlock {
  groupNumber: string;
  age: string;
  background: string;
}

export function GroupBlock({ groupNumber, age, background }: IGroupBlock): ReactElement {
  return (
    <div className={`${background} bg-no-repeat bg-center bg-cover p-6 flex flex-col mt-[40px] relative`}>
      <div className="absolute inset-0 bg-to-top-white-transparent"></div>
      <p className="font-semibold text-[14px] z-10">{`0${groupNumber}.`}</p>
      <h4 className="text-black text-[22px] font-semibold mt-[140px] z-10">{`${groupNumber} группа`}</h4>
      <p className="text-[15px] text-gray-text mt-5 z-10">{`Ведём набор в группы от ${age} лет`}</p>
      <p className="text-blue-text mt-6 z-10">Свяжитесь с нами &#8702;</p>
      <button type="button" className="text-[15px] text-red font-medium border-red border-solid border-2 rounded-[30px] px-6 py-3 leading-none mt-6 self-center z-10">Оставить заявку</button>
    </div>
  )
}
