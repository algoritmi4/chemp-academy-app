import { ReactElement } from "react";

export function Preloader(): ReactElement {
  return (
    <div className="w-12 h-12 border-solid border-4 border-black border-b-transparent rounded-circle animate-spin"></div>
  )
}
