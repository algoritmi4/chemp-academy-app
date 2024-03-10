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
    <form className="flex flex-col max-w-[315px] xl:max-w-[410px]">
      <p className="text-[15px] font-semibold leading-none font-normal lg:text-[16px]">Свяжитесь с нами!</p>
      <div className="mt-5 flex flex-col">
        <input
          type="text"
          name="initials"
          value={inputValues.initials}
          onChange={handleInputValues}
          placeholder="Ваше ФИО"
          className="px-[20px] h-[43px] outline-none rounded-[30px] text-black placeholder:font-normal"
          required
        />
        <label htmlFor="initials" className="mt-[5px] text-[13px] font-normal leading-none">Заполните ваше ФИО</label>
      </div>
      <div className="flex flex-col mt-5">
        <input
          type="tel"
          name="phone"
          value={inputValues.phone}
          onChange={handleInputValues}
          onFocus={handlePhoneFocus}
          placeholder="+7 (___) ___-__-__"
          className="px-[20px] h-[43px] outline-none rounded-[30px] text-black placeholder:font-normal"
          required
        />
        <label htmlFor="phone" className="mt-[5px] text-[13px] font-normal leading-none">Заполните номер телефона для связи</label>
      </div>
      <button type="submit" className="self-start font-normal text-[17px] h-[41px] px-[15px] border-solid border-red border-3 rounded-[20px] leading-none mt-5">Отправить</button>
    </form>
  )
}
