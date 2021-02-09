import React from "react";
import HeroSliderStyles from "../../styles/HeroSlider.module.css";

const HeroSliderItem = ({ description1, description2, backgroundImage }) => {
  return (
    <article
      className={HeroSliderStyles.article}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={HeroSliderStyles.article__overlay}>
        <div>
          <h3 className={HeroSliderStyles.article__title}>
            <span>PB</span> Låsesmed
          </h3>
          <p className={HeroSliderStyles.article__description}>
            {description1} <br /> {description2}
          </p>
        </div>
      </div>
    </article>
  );
};

export default HeroSliderItem;
