import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Forside</Link>
        </li>
        <li>
          <Link href="/kontakt-os">Kontakt Os</Link>
        </li>
        <li>
          <Link href="/bestil-laasesmed">Bestil Låsesmed</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
