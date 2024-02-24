import { ReactElement } from "react";
import paints from '../../images/paints-150x150.png';
import secutity from '../../images/security-150x150.png';
import profi from '../../images/profi-150x150.png';
import result from '../../images/results-150x150.png';
import persiverens from '../../images/persiverens-150x150.png';
import { AdvantagesBlock } from "./AdvantagesBlock";

export function Advantages(): ReactElement {
  return (
    <section className="bg-black text-white flex flex-col pb-[84px]">
      <h2 className="text-[28px] border-b-red border-b-solid border-b-3 mt-3 pb-3 text-center mx-3">Наши преимущества</h2>
      <AdvantagesBlock image={paints} title="Индивидуальный подход" text="Мы знаем, что каждый ребенок уникален. Мы создаем индивидуальные и уникальные тренировочные программы, учитывая потребности и цели каждого маленького спортсмена." />
      <AdvantagesBlock image={secutity} title="Качество и безопасность" text="Безопасность наших учеников — наш главный приоритет. Мы обеспечиваем высокий уровень безопасности на всех занятиях, чтобы ваши дети чувствовали себя уверенно и комфортно." />
      <AdvantagesBlock image={profi} title="Профессиональные тренеры" text="Наши тренеры — это настоящие профессионалы, которые зажгут огонь спортивной страсти у вашего ребенка. Они разработают индивидуальный подход к каждому ученику, чтобы раскрыть его максимальный потенциал." />
      <AdvantagesBlock image={result} title="Результативность" text="Наши ученики регулярно участвуют и побеждают на соревнованиях разного уровня. Мы гордимся успехами наших детей и всегда поддерживаем их в стремлении к победе." />
      <AdvantagesBlock image={persiverens} title="Воспитываем упорство в спортсменах" text="Кроме профессиональных тренировок, в нашем клубе детей ждут интересные мероприятия, тренировочные лагеря и многое другое. У нас всегда есть, чем удивить наших учеников и их родителей!" />
    </section>
  )
}
