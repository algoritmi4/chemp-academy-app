import { ReactElement, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { useAppSelector } from "../../utils/hooks";

export function Header(): ReactElement {
  const [isHide, setIsHide] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [isNavHide, setIsNavHide] = useState(true);
  const { isOpen } = useAppSelector((state) => state.applicationPopup);

  const defaultOffset = 300;

  useEffect(() => {
    window.addEventListener('scroll', handleHideHeader);

    return () => window.removeEventListener('scroll', handleHideHeader);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScroll]);

  function handleHideHeader() {
    if (window.scrollY > lastScroll && window.scrollY > defaultOffset && !isHide) {
      setIsHide(true);
    } else if (!isOpen && window.scrollY < lastScroll && isHide) {
      setIsHide(false);
    }

    setLastScroll(window.scrollY);
  }

  function handleNavState() {
    if (isNavHide) {
      setIsNavHide(false);
    } else {
      setIsNavHide(true);
    }
  }

  function handleSwitchPage() {
    setIsNavHide(true);
  }

  return (
    <header className={`flex w-full fixed duration-150 py-[2px] px-4 bg-white z-40 md:px-7 lg:px-10 items-center ${isHide ? "translate-y-[-128px]" : ""}`}>
      <Logo />
      <Navigation isHide={isNavHide} handleSwitchPage={handleSwitchPage} />
      <p className="text-[20px] font-medium ml-auto">+7 (985) 988-96-70</p>
      <a className="flex items-center mx-auto lg:ml-3 lg:mr-0" href="https://vk.com/sambojudochampacademy" target="_blank"><svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m23.456 5.784c-.27.849-.634 1.588-1.09 2.259l.019-.03q-.672 1.12-1.605 2.588-.8 1.159-.847 1.2c-.138.173-.234.385-.267.618l-.001.007c.027.212.125.397.268.535l.4.446q3.21 3.299 3.611 4.548c.035.092.055.198.055.309 0 .194-.062.373-.167.52l.002-.003c-.176.181-.422.293-.694.293-.03 0-.061-.001-.09-.004h.004-2.631c-.001 0-.003 0-.005 0-.337 0-.647-.118-.89-.314l.003.002c-.354-.291-.669-.606-.951-.948l-.009-.012q-.691-.781-1.226-1.315-1.782-1.694-2.63-1.694c-.021-.002-.045-.003-.07-.003-.165 0-.319.051-.446.138l.003-.002c-.104.13-.167.298-.167.479 0 .036.002.07.007.105v-.004c-.027.314-.043.679-.043 1.048 0 .119.002.237.005.355v-.017 1.159c.01.047.016.101.016.156 0 .242-.11.458-.282.601l-.001.001c-.387.177-.839.281-1.316.281-.102 0-.202-.005-.301-.014l.013.001c-1.574-.03-3.034-.491-4.275-1.268l.035.02c-1.511-.918-2.763-2.113-3.717-3.525l-.027-.042c-.906-1.202-1.751-2.56-2.471-3.992l-.07-.154c-.421-.802-.857-1.788-1.233-2.802l-.06-.185c-.153-.456-.264-.986-.31-1.535l-.002-.025q0-.758.892-.758h2.63c.024-.002.052-.003.081-.003.248 0 .477.085.658.228l-.002-.002c.2.219.348.488.421.788l.003.012c.484 1.367.997 2.515 1.587 3.615l-.067-.137c.482.97 1.015 1.805 1.623 2.576l-.023-.031q.8.982 1.248.982c.009.001.02.001.032.001.148 0 .277-.08.347-.2l.001-.002c.074-.19.117-.411.117-.641 0-.049-.002-.098-.006-.146v.006-3.879c-.021-.457-.133-.884-.32-1.267l.008.019c-.124-.264-.273-.492-.45-.695l.003.004c-.164-.164-.276-.379-.311-.619l-.001-.006c0-.17.078-.323.2-.423l.001-.001c.121-.111.283-.178.46-.178h.008 4.146c.022-.003.047-.004.073-.004.195 0 .37.088.486.226l.001.001c.103.188.164.413.164.651 0 .038-.002.075-.005.112v-.005 5.173c-.002.024-.003.052-.003.08 0 .184.051.357.139.504l-.002-.004c.073.108.195.178.333.178h.001c.176-.012.336-.07.471-.162l-.003.002c.272-.187.506-.4.709-.641l.004-.005c.607-.686 1.167-1.444 1.655-2.25l.039-.07c.344-.57.716-1.272 1.053-1.993l.062-.147.446-.892c.155-.446.571-.76 1.06-.76.019 0 .038 0 .057.001h-.003 2.631q1.066 0 .8.981z"/></svg></a>
      <div onClick={handleNavState} className="flex items-center cursor-pointer lg:hidden">
        {
          isNavHide ? (
            <svg fill="#2e3092" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></svg>
          ) : (
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg>
          )
        }
      </div>
      
    </header>
  )
}
