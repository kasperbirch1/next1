import Flickity from "react-flickity-component";
import HeroSliderItem from "./HeroSliderItem";

const flickityOptions = {
  autoPlay: 6000,
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
          backgroundImage="https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2020/02/14125552/Copenhagen-wide-angle.jpg"
        />
        <HeroSliderItem
          description1="Vi leverer altid professionel låseservice"
          description2="Hurtigt, sikkert og trygt"
          backgroundImage="https://images.unsplash.com/photo-1590587181460-58b27c558712?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        />
      </Flickity>
    </>
  );
};

export default HeroSlider;
