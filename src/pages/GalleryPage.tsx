import { ReactElement } from "react";
import { Teaser } from "../components/Teaser";
import { Questions } from "../components/Questions";
import { GallerySliders } from "../components/GallerySliders/GallerySliders";

function GalleryPage(): ReactElement {
  return (
    <>
      <Teaser text="Галерея" bgClass="bg-contacts-teaser-bg" />
      <GallerySliders />
      <Questions />
    </>
  )
}

export default GalleryPage;
