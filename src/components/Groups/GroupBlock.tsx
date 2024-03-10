import { ReactElement } from "react";

interface IGroupBlock {
  groupNumber: string;
  age: string;
  background: string;
}

export function GroupBlock({ groupNumber, age, background }: IGroupBlock): ReactElement {
  return (
    <div className={`${background} bg-no-repeat bg-top bg-cover min-h-[363px] border-solid border-white border-2 rounded-[30px] text-white flex flex-col items-start justify-end p-5`}>
      <h4 className="text-[23px] font-bold">{`${groupNumber} группа`}</h4>
      <p className="text-[19px] font-medium leading-6 mt-2">{`Ведём набор в группы от ${age} лет`}</p>
      <button type="button" className="border-solid border-white border-2 rounded-[30px] text-[15px] font-medium text-white mt-2 px-3 py-1">Свяжитесь с нами</button>
    </div>
  )
}
