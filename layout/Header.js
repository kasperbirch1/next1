import headerStyles from "../styles/Header.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <Nav />
      <h1 className={headerStyles.title}>
        <span>PB</span> Låsesmed
      </h1>
      <p className={headerStyles.description}>
        Vi leverer altid professionel låseservice <br />
        Hurtigt, sikkert og trygt
      </p>
    </header>
  );
};

export default Header;
