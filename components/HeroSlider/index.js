import Flickity from "react-flickity-component";
import HeroSliderItem from "./HeroSliderItem";

const flickityOptions = {
  autoPlay: 8000,
  prevNextButtons: false,
  pageDots: false,
};

const HeroSlider = () => {
  return (
    <>
      <Flickity elementType={"section"} options={flickityOptions}>
        <HeroSliderItem
          description1="Vi leverer altid professionel låseservice"
          description2="Hurtigt, sikkert og trygt"
          backgroundImage="/copenhagen_01.jpg"
        />
        <HeroSliderItem
          description1="Vi leverer altid professionel låseservice"
          description2="Hurtigt, sikkert og trygt"
          backgroundImage="/copenhagen_02.jpeg"
        />
      </Flickity>
    </>
  );
};

export default HeroSlider;
