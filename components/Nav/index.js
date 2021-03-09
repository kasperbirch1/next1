import { Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { WrapperContainer } from "../../styles/Wrapper";
import { SpaceBetweenCss } from "../../styles/SpaceBetween";
import { MenuList } from "../../content/MenuList";
import { breakpoints } from "../../styles/breakpoints";
Modal.setAppElement(`#__next`);

const StyledNav = styled.nav`
  padding: 0.75rem 0;
  background: #000;
  color: #fff;

  .mobil-link-container {
    display: inline-block;
    margin-left: 1rem;
  }
`;

const SpaceBetweenWrapper = styled(WrapperContainer)`
  ${SpaceBetweenCss}
`;

const DesktopMenu = styled.ul`
  display: none;
  @media ${breakpoints.sm} {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
`;

const MobileMenu = styled.ul``;

const StyledMenuButton = styled(Button)`
  @media ${breakpoints.sm} {
    display: none !important;
  }
`;

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
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

  return (
    <>
      <StyledNav>
        <SpaceBetweenWrapper>
          <StyledMenuButton
            onClick={() => {
              setModalOpen(true);
            }}
            variant="contained"
            startIcon={<MenuIcon />}
            color="primary"
          >
            Menu
          </StyledMenuButton>

          <DesktopMenu>
            <MenuList />
          </DesktopMenu>
          <a className="mobil-link-container" href="tel:+4531313515">
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
        <CloseIcon
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            fontSize: "1.5rem",
          }}
        />
        <MobileMenu>
          <MenuList />
        </MobileMenu>
      </Modal>
    </>
  );
};

export default Nav;
