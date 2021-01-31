import React from "react";
import headerStyles from "../../styles/Header.module.css";

const HeroSliderItem = ({ description1, description2, backgroundImage }) => {
  return (
    <article
      style={{
        width: "100%",
        height: "20rem",
        display: "grid",
        placeContent: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255, .90)",
          padding: "2.5rem 5rem",
          borderRadius: ".25rem",
        }}
      >
        <h1 className={headerStyles.title}>
          <span>PB</span> Låsesmed
        </h1>
        <p className={headerStyles.description}>
          {description1} <br /> {description2}
        </p>
      </div>
    </article>
  );
};

export default HeroSliderItem;
