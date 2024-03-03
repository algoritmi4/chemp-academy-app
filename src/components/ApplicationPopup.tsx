import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { popupClosed } from "../utils/Slices/ApplicationPopupSlice";

export function ApplicationPopup(): ReactElement {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.applicationPopup);

  return (
    <div className={`fixed inset-x-0 bottom-0 flex flex-col items-center justify-center z-20 duration-150 box-border ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      <span className="fixed inset-0 z-10 bg-black opacity-50" onClick={() => dispatch(popupClosed())}></span>
      <div className="z-50 relative mx-auto">
        <button type="button" onClick={() => dispatch(popupClosed())} className="z-50 absolute border-none bg-cross bg-transparent bg-no-repeat bg-cover bg-center w-11 h-11 cursor-pointer top-[-50px] right-0 hover:opacity-70 duration-100"></button>
        <form className="z-50 flex flex-col text-bold rounded-[20px] px-5 py-6 w-screen bg-gray">
          <h2 className="text-[26px]">Оставить заявку</h2>
          <label className="mt-4">ФИО</label>
          <input type="text" placeholder="Ваше ФИО" className="outline-none border-gray-border border-1 border-solid pl-3 py-2 rounded-[3px] mt-2" />
          <p className="text-[12px] text-gray-text mt-1">Заполните ФИО, чтобы мы смогли корректно к вам обратиться</p>
          <label className="mt-4">Номер телефона</label>
          <input type="tel" placeholder="+7 (___) ___-__-__" className="outline-none border-gray-border border-1 border-solid pl-3 py-2 rounded-[3px] mt-2" />
          <p className="text-[12px] text-gray-text mt-1">Заполните номер телефона для связи</p>
          <p className="mt-4">Выберите возрастную группу</p>
          <select className="outline-none border-gray-border border-1 border-solid pl-2 py-2 rounded-[3px] mt-2" defaultValue="large-group">
            <option value="little-group">Группа от 4-6 лет</option>
            <option value="medium-group">Группа от 7-10 лет</option>
            <option value="large-group">Группа от 12 лет и старше</option>
          </select>
          <p className="mt-4">Выберите количество занятий</p>
          <select className="outline-none border-gray-border border-1 border-solid pl-2 py-2 rounded-[3px] mt-2" defaultValue="12 visits">
            <option value="start">Пробная тренировка - 0 р.</option>
            <option value="8 visits">8 посещений в месяц - 5 500 р.</option>
            <option value="12 visits">12 посещений в месяц - 6 500 р.</option>
          </select>
          <button type="submit" className="mt-6 self-start bg-red text-white rounded-[10px] px-3 h-[41px]">Отправить</button>
        </form>
      </div>
    </div>
  )
}
