import React from "react";
import CardItem from "./CardItem";
import { serviceItems } from "../../content/serviceItems";

import styled from "styled-components";
const StyledCardListSection = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const CardList = () => {
  return (
    <StyledCardListSection>
      {serviceItems.map((element) => {
        return (
          <CardItem
            key={element.name}
            title={element.name}
            description={element.description}
            image={element.image}
          />
        );
      })}
    </StyledCardListSection>
  );
};

export default CardList;
