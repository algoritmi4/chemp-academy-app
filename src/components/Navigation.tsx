import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

const routesList = [
  {
    route: '/galereya/',
    text: 'Галерея'
  },
  {
    route: '/',
    text: 'Главная'
  },
  {
    route: '/kontakty/',
    text: 'Контакты'
  },
  {
    route: '/o-nas/',
    text: 'О нас'
  },
  {
    route: '/trenery/',
    text: 'Тренеры'
  },
  {
    route: '/uslugi/',
    text: 'Услуги'
  },
]

export function Navigation({ isHide }: { isHide: boolean }): ReactElement {
  const location = useLocation();

  console.log(location)

  return (
    <nav className={`absolute flex flex-col top-full w-full right-0 duration-100 ${isHide ? "invisible opacity-0" : "visible opacity-1"}`}>
      {
        routesList.map((el, index) => <Link className={`text-[16px] px-5 border-t-gray border-t-1 border-t-solid h-[52px] flex items-center ${location.pathname == el.route ? "bg-light-purple text-black" : "bg-white text-gray-text"}`} to={el.route} key={index}>{el.text}</Link>)
      }
    </nav>
  )
}
