import { ReactElement } from "react";

export function Quote(): ReactElement {
  return (
    <section className="flex flex-col bg-white items-center px-8 py-7">
      <blockquote className="px-5 pr-[18px] py-5 text-center rounded-[30px] shadow-quote md:pt-[80px] md:pb-20">
        <h3 className="font-medium text-[15px] md:text-[32px] lg:text-[40px]">“Возможность <span className="font-bold">преодолеть себя -</span><br></br>без сомнений, самое <span className="font-bold">ценное<br></br>свойство спорта.</span>”</h3>
      </blockquote>
      <p className="text-black text-[16px] font-semibold leading-none mt-5 md:mt-16 lg:text-[18px]">&copy;Ольга Корбут</p>
    </section>
  )
}
