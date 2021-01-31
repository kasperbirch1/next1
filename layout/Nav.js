import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../styles/materialUiTheme";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className="wrapper">
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
        <li>
          <a href="tel:31313515">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                color="primary"
              >
                31 31 35 15
              </Button>
            </ThemeProvider>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
