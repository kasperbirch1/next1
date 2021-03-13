import React from "react";
import { breakpoints } from "../../styles/breakpoints";
import Image from "next/image";

import styled from "styled-components";
const StyledHeroSliderItem = styled.article`
  width: 100%;
  display: grid;
  place-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;
  position: relative;
  .overlay {
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 2rem;
    border-radius: 0.25rem;
    display: grid;
    place-content: center;
  }

  .title,
  .description {
    text-align: center;
  }

  .title {
    line-height: 1.15;
    font-size: 2rem;
    @media ${breakpoints.sm} {
      font-size: 3rem;
    }
    span {
      color: #0070f3;
    }
  }
  .description {
    line-height: 1.5;
    font-size: 1.5rem;
    @media ${breakpoints.sm} {
      font-size: 2.5rem;
    }
  }
`;

const HeroSliderItem = ({ description1, description2, backgroundImage }) => {
  return (
    <StyledHeroSliderItem>
      <Image
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        alt="Københavs Låsesmed"
      />
      <div className="overlay">
        <div>
          <h3 className="title">
            <span>PB</span> Låsesmed
          </h3>
          <p className="description">
            {description1} <br /> {description2}
          </p>
        </div>
      </div>
    </StyledHeroSliderItem>
  );
};

export default HeroSliderItem;
