import Link from "next/link";
import { Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import styled from 'styled-components';
import Modal from "react-modal";
import { WrapperContainer } from "../styles/Wrapper";
import { SpaceBetweenCss } from "../styles/SpaceBetween";
Modal.setAppElement(`#__next`);

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  content: {
    top: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    maxWidth: "500px",
    padding: "2rem",
    marginLeft: "auto",
    inset: "0px",
  },
};

const StyledNav = styled.nav`
  padding: 0.75rem 0;
  background: #000;
  color: #fff;

`;

const SpaceBetweenWrapper = styled(WrapperContainer)`
  ${SpaceBetweenCss}
`

const StyledMenuListUl = styled.ul`
  list-style: none;
`

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <StyledNav>
        <SpaceBetweenWrapper>
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
        </SpaceBetweenWrapper>
      </StyledNav>

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        closeTimeoutMS={500}
      >
        <span
          onClick={closeModal}
          style={{
            fontSize: "1.5rem",
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
          }}
        >
          Close
        </span>
        <StyledMenuListUl>
          <MenuList />
        </StyledMenuListUl>
      </Modal>
    </>
  );
};



export const MenuList = () =>  (
    <>
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
    </>
  );


export default Nav;
