import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { routesList } from "../../utils/data";

interface INavigationProps {
  isHide: boolean;
  handleSwitchPage: () => void;
}

export function Navigation({ isHide, handleSwitchPage }: INavigationProps): ReactElement {
  const location = useLocation();

  return (
    <nav className="flex">
      <ul className={`absolute flex flex-col top-full w-full right-0 lg:flex-row lg:static lg:items-center ${isHide ? "invisible lg:visible" : "visible"}`}>
        {
          routesList.map((el, index) => <li className={`text-[16px] pl-5 border-t-gray border-t-1 border-t-solid h-[52px] flex items-center lg:border-none ${location.pathname == el.route ? "bg-light-purple text-black lg:bg-white" : "bg-white text-gray-text"}`}><Link onClick={handleSwitchPage} to={el.route} key={index}>{el.text}</Link></li>)
        }
      </ul>
    </nav>
  )
}
