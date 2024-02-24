import { ReactElement, ReactNode } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderArrow } from "./SliderArrow";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  className: 'w-[104.5%] h-[400px]',
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <SliderArrow prev={false} />,
  prevArrow: <SliderArrow prev={true} />
};

export function SlickSlider({ children }: { children: ReactNode[] }): ReactElement {
  return (
    <Slider {...settings}>{children}</Slider>
  )
}
