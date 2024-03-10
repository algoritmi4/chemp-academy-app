import { ReactElement, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routesList } from "../../utils/data";

interface INavigationProps {
  isHide: boolean;
  handleSwitchPage: () => void;
}

export function Navigation({ isHide, handleSwitchPage }: INavigationProps): ReactElement {
  const location = useLocation();
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    setScreen(window.screen.width);
  }, []);

  return (
    <nav className="flex">
      <ul className={`absolute flex flex-col top-full w-full right-0 bg-transparent duration-150 lg:flex-row lg:static lg:items-center ${isHide ? `invisible translate-y-[-100%] lg:visible lg:translate-y-0 ${screen >= 1024 ? "opacity-1" : "opacity-0"}` : "visible translate-y-0 opacity-1"}`}>
        {
          routesList.map((el, index) => <li key={index} className={`text-[14px] pl-5 mt-1 border-t-gray border-t-1 rounded-[30px] border-t-solid h-[35px] shadow-header flex items-center lg:border-none lg:shadow-none ${location.pathname == el.route ? "bg-light-purple text-black lg:bg-white" : "bg-white text-gray-text"}`}><Link className="w-full" onClick={handleSwitchPage} to={el.route}>{el.text}</Link></li>)
        }
      </ul>
    </nav>
  )
}
