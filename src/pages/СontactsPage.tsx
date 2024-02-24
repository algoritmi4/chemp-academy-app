import { ReactElement } from "react";
import { ContactsTeaser } from "../components/ContactsTeaser";
import { Positions } from "../components/Positions/Positions";
import { Questions } from "../components/Questions";

export function ContactsPage(): ReactElement {
  return (
    <main className="w-screen pt-[90px] grow">
      <ContactsTeaser />
      <Positions />
      <Questions />
    </main>
  )
}
