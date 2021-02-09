import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

const Nav = () => {
  const [togglemenu, setTogglemenu] = useState(false);

  return (
    <nav className={navStyles.nav}>
      <div className={`wrapper ${navStyles.mobile}`}>
        <Button
          onClick={() => {
            setTogglemenu(!togglemenu);
          }}
          variant="contained"
          startIcon={<MenuIcon />}
          color="primary"
        >
          Menu
        </Button>
        <a href="tel:+4531313515">
          <Button variant="contained" startIcon={<PhoneIcon />} color="primary">
            31 31 35 15
          </Button>
        </a>
      </div>

      <div className={`wrapper ${navStyles.desktop}`}>
        <MenuList addPhone />
      </div>

      {togglemenu && (
        <div className={navStyles.destopMenuListContainer}>
          <MenuList changeFlex setTogglemenu={setTogglemenu} />
        </div>
      )}
    </nav>
  );
};

export const MenuList = ({ addPhone, changeFlex, footer }) => {
  return (
    <ul
      className={changeFlex ? navStyles.changeFlexMenuList : navStyles.MenuList}
    >
      <li>
        <Link href="/">Forside</Link>
      </li>
      <li>
        <Link href="/priser">Prisliste</Link>
      </li>
      <li>
        <Link href="/bestil-laasesmed">Bestil Låsesmed</Link>
      </li>
      <li>
        <Link href="/kontakt-os">Kontakt Os</Link>
      </li>
      {addPhone && (
        <li>
          <a href="tel:+4531313515">
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              color="primary"
            >
              31 31 35 15
            </Button>
          </a>
        </li>
      )}
    </ul>
  );
};

export default Nav;
