import { ReactElement, Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer";
import { Preloader } from "./Preloader";

export function BaseLayout(): ReactElement {
  const [isLoad, setIsLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoad(true);
    setTimeout(() => setIsLoad(false), 700)
  }, [location.pathname]);

  return (
    <div className="w-full relative flex flex-col h-screen">
      <Header />
      {
        isLoad && <div className="absolute inset-0 bg-white z-50 flex justify-center items-center"><Preloader /></div>
      }
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  )
}
