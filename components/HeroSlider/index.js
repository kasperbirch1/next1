import Swiper from "react-id-swiper";
import headerStyles from "../../styles/Header.module.css";

const HeroSlider = () => {
  const params = {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <>
      <Swiper {...params}>
        <div>
          <h1 className={headerStyles.title}>
            <span>PB</span> Låsesmed
          </h1>
          <p className={headerStyles.description}>
            Vi leverer altid professionel låseservice <br />
            Hurtigt, sikkert og trygt
          </p>
        </div>
        <div>
          <h1 className={headerStyles.title}>
            <span>PB</span> Låsesmed
          </h1>
          <p className={headerStyles.description}>
            Vi leverer altid professionel låseservice <br />
            Hurtigt, sikkert og trygt
          </p>
        </div>
        <div>
          <h1 className={headerStyles.title}>
            <span>PB</span> Låsesmed
          </h1>
          <p className={headerStyles.description}>
            Vi leverer altid professionel låseservice <br />
            Hurtigt, sikkert og trygt
          </p>
        </div>
      </Swiper>

      <style jsx>{`
        .swiper-slide {
          //   height: 20rem;
        }
      `}</style>
    </>
  );
};

export default HeroSlider;
