import { ReactElement } from "react";
import { Teaser } from "../components/Teaser";
import { Questions } from "../components/Questions";
import { GallerySliders } from "../components/GallerySliders/GallerySliders";

function GalleryPage(): ReactElement {
  return (
    <main className="w-screen pt-[90px] grow">
      <Teaser text="Галерея" bgClass="bg-contacts-teaser-bg" />
      <GallerySliders />
      <Questions />
    </main>
  )
}

export default GalleryPage;
