import { ReactElement } from "react";

export function NotFound(): ReactElement {
  return (
    <main className="flex flex-col items-center justify-center pt-[90px] grow">
      <h1 className="text-[38px] font-bold text-center">404 Not Found</h1>
      <h2 className="text-[36px] font-semibold text-center mt-5">Похоже, эта страница не существует</h2>
    </main>
  )
}
