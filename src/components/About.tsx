import { ReactElement } from "react";
import { AdvantagesBlock } from "./Advantages/AdvantagesBlock";
import paints from '../images/paints-150x150.png';
import friends from '../images/friends-150x150.png';
import teacher from '../images/teacher-150x150.png';
import leader from '../images/leader-150x150.png';
import competitions from '../images/competitions-150x150.png';

export function About(): ReactElement {
  return (
    <section className="flex flex-col pb-[84px]">
      <h2 className="text-[28px] font-semibold border-b-red border-b-solid border-b-3 mt-3 pb-3 text-center mx-3">О спортивном клубе “Академии Чемпионов”</h2>
      <AdvantagesBlock image={paints} title="Индивидуальный подход" text="Мы верим, что каждый ребенок уникален и заслуживает внимания. Мы создаем индивидуальные тренировочные программы, учитывая потребности и цели каждого ученика, чтобы он мог раскрыть свой максимальный потенциал." />
      <AdvantagesBlock image={friends} title="Дружеская атмосфера" text="В нашем спортивном клубе царит дружественная атмосфера, где дети находят новых друзей и единомышленников. Мы вместе тренируемся, соревнуемся и поддерживаем друг друга, создавая настоящую спортивную семью." />
      <AdvantagesBlock image={teacher} title="Профессиональные тренеры с опытом" text="Наши тренеры — это настоящие эксперты в области самбо и дзюдо, с многолетним опытом работы с детьми. Они знают, как развить учеников физически и эмоционально, помогая им стать лучше не только в спорте, но и в повседневной жизни." />
      <AdvantagesBlock image={leader} title="Развитие лидерских качеств" text="Самбо и дзюдо — это не только физические упражнения, но и уроки дисциплины, справедливости и уважения. Ваш ребенок разовьет лидерские качества, научится преодолевать трудности и стремиться к успеху." />
      <AdvantagesBlock image={competitions} title="Участие в соревнованиях" text="Наш клуб активно участвует в соревнованиях разного уровня, что позволяет детям испытать радость победы и научиться не сдаваться при неудачах. Участие в соревнованиях также способствует развитию уверенности и самодисциплины." />
    </section>
  )
}
