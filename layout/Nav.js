import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement(`#__next`);

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "0",
    right: "0",
    // bottom: "0",
    // backgroundColor: "rgba(255, 255, 255, .9)",
    width: "100%",
    maxWidth: "500px",
    padding: "2rem",
    marginLeft: "auto",
    inset: "0px",
  },
};

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <nav className={navStyles.nav}>
        <div className={`wrapper ${navStyles.mobile}`}>
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variant="contained"
            startIcon={<MenuIcon />}
            color="primary"
          >
            Menu
          </Button>
          <a href="tel:+4531313515">
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              color="primary"
            >
              31 31 35 15
            </Button>
          </a>
        </div>
      </nav>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        closeTimeoutMS={500}
      >
        <p
          onClick={closeModal}
          style={{
            fontSize: "1.5rem",
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
          }}
        >
          Close
        </p>
        <MenuList />
      </Modal>
    </>
  );
};

export const MenuList = ({ addPhone }) => {
  return (
    <ul className={navStyles.MenuList}>
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
