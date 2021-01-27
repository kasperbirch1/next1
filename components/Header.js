import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header>
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
