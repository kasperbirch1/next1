import React from "react";
import HeroSliderStyles from "../../styles/HeroSlider.module.css";
import Image from "next/image";

const HeroSliderItem = ({ description1, description2, backgroundImage }) => {
  return (
    <article className={HeroSliderStyles.article}>
      <div className={HeroSliderStyles.article__overlay}>
        <div>
          <h1 className={HeroSliderStyles.article__title}>
            <span>PB</span> Låsesmed
          </h1>
          <p className={HeroSliderStyles.article__description}>
            {description1} <br /> {description2}
          </p>
        </div>
      </div>
      <Image src={backgroundImage} layout="fill" objectFit="cover" />
    </article>
  );
};

export default HeroSliderItem;
