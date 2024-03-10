import { ReactElement } from "react";
import { Teaser } from "../components/Teaser";
import { Positions } from "../components/Positions/Positions";
import { Questions } from "../components/Questions";

function ContactsPage(): ReactElement {
  return (
    <>
      <Teaser text="Контакты" bgClass="bg-contacts-teaser-bg"/>
      <Positions />
      <Questions />
    </>
  )
}

export default ContactsPage;
