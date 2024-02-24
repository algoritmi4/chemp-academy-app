import { ChangeEvent, ReactElement, useState } from "react";

export function MainForm(): ReactElement {
  const [inputValues, setInputValues] = useState({initials: '', phone: ''});

  function handleInputValues(e: ChangeEvent<HTMLInputElement>) {
    setInputValues((state) => ({...state, [e.target.name]: e.target.value}));
  }

  function handlePhoneFocus() {
    if (inputValues.phone === '') {
      setInputValues((state) => ({...state, phone: '+7'}));
    }
  }

  return (
    <form className="flex flex-col">
          <p className="font-thin">Свяжитесь с нами!</p>
          <div className="mt-[50px] flex flex-col">
            <input
              type="text"
              name="initials"
              value={inputValues.initials}
              onChange={handleInputValues}
              placeholder="Ваше ФИО"
              className="border-red border-solid border-1 px-[14px] h-[43px] outline-none rounded-[3px] text-black placeholder:font-normal"
              required
            />
            <label htmlFor="initials" className="mt-[5px] text-[14px] font-thin leading-none">Заполните ФИО, чтобы мы могли корректно к вам обратиться</label>
          </div>
          <div className="flex flex-col mt-[30px]">
            <input
              type="tel"
              name="phone"
              value={inputValues.phone}
              onChange={handleInputValues}
              onFocus={handlePhoneFocus}
              placeholder="+7 (___) ___-__-__"
              className="border-red border-solid border-1 px-[14px] h-[43px] outline-none rounded-[3px] text-black placeholder:font-normal"
              required
            />
            <label htmlFor="phone" className="mt-[5px] text-[14px] font-thin leading-none">Заполните номер телефона для связи</label>
          </div>
          <button type="submit" className="self-start font-normal text-[16px] h-[41px] px-[15px] bg-red rounded-[20px] leading-none mt-10">Отправить</button>
        </form>
  )
}
