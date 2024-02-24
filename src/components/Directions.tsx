import { ReactElement } from "react";
import { AdvantagesBlock } from "./Advantages/AdvantagesBlock";
import sambo from '../images/sambo-150x150.png';
import dzudo from '../images/dzudo-150x150.png';

export function Directions(): ReactElement {
  return (
    <section className="flex flex-col pb-[94px]">
      <h2 className="text-[28px] font-bold border-b-red border-b-solid border-b-3 mt-10 pb-3 text-center mx-3">Наши главные направления – это обучение технике самбо, дзюдо, самостраховке (умению правильно падать) и акробатике.</h2>
      <AdvantagesBlock image={sambo} title="Самбо" text="Это самооборона без оружия. Это уникальный вид спорта, взявший элементы дзюдо, джиу-джитсу, сумо, греко-римской борьбы, а также национальных видов борьбы народов бывшего СССР. Создано самбо в начале 20-го века в Советском Союзе. Его приемы до сих пор являются базой для лучших систем защиты без оружия." />
      <AdvantagesBlock image={dzudo} title="Дзюдо" text="Это дословно переводится как гибкий путь и начинает свой путь с 1882 года. Считается японским боевым искусством на основе дзюдзюцу. Это мягкий, безударный вид спорта, который отлично подойдет для самых юных борцов." />
    </section>
  )
}
