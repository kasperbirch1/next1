import React from "react";
import CardItem from "./CardItem";
import CardListStyles from "../../styles/CardList.module.css";
// import { FaCar, FaHome, FaKey, FaUnlockAlt } from 'react-icons/fa';

const serviceItems = [
  {
    // icon: <FaKey />,
    name: "MISTET NØGLER",
    description:
      "Har du mistet dine nøgler? Dette sker for de fleste mennesker, på et tidspunkt i livet. PB Låsesmed kan heldigvis hjælpe dig ud af den situation. Vi tilbyder altid professionel låseservice, og kommer ud til dig når du har brug for det.",
  },
  {
    // icon: <FaUnlockAlt />,
    name: "SIKKERHEDSNØGLER",
    description:
      "Vil du gerne føle dig tryg, og sikre dit hjem bedre?  Du kan altid kontakte PB Låsesmed, til en uforpligtende samtale, om hvordan du sikre dit hjem bedst muligt. Sammen finder vi en løsning der passer bedst til dine behov.",
  },
  {
    // icon: <FaHome />,
    name: "OMKODNING AF LÅSE",
    description:
      "Er du flyttet i nyt hus, eller har du simpelthen bare mistet overblikket over hvem der har nøgle til dit hjem? I disse situationer anbefaler vi en omkodning af dine låse. Med en omkodning får du overblikket og sikkerheden tilbage.",
  },
  {
    // icon: <FaCar />,
    name: "BILNØGLE",
    description:
      "Står du en den uheldige situation og har forlagt dine bilnøgler? Eller har du en billås der driller? Igennem tiden kan ens nøgler gå tabt, og låse kan blive nedslidte. PB Låsesmed rykker hurtigt ud til dig, og løser problemet.",
  },
];

const CardList = () => {
  return (
    <section className={CardListStyles.parent}>
      {serviceItems.map((element) => {
        return (
          <CardItem
            key={element.name}
            title={element.name}
            description={element.description}
            image="https://images.unsplash.com/photo-1579728866437-6397f3d89ec3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80"
          />
        );
      })}
    </section>
  );
};

export default CardList;
