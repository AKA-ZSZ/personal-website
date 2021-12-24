import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import useMobile from "../../hooks/useMobile";
import NavbarFooter from "../navbarFooter/navbarFooter";
import "./navbarComponent.scss";

export default function NavbarComponent() {
  const isMobile = useMobile();
  const [isDefault, setIsDefault] = useState(true); // Tells if the page is re-rendered
  const isBrowser = typeof window !== "undefined";

  const updateCurrentState = () => {
    setIsDefault(false);

    // Enable normal scrolling when all modals closed and the user clicked any of the nav buttons
    if (isBrowser) {
      window.onscroll = null;
    }
  };
  return (
    <Navbar expand="md" className="navbar">
      <Container className="navbar-container">
        <Navbar.Brand
          href="#home"
          className={`navbar-brand ${isMobile ? "" : "mx-auto"}`}
        >
          Zhentian
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-nav">
          <Nav>
            <Nav.Link href="#home" className={`${isDefault ? "active" : ""}`}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={updateCurrentState}>
              About
            </Nav.Link>
            <Nav.Link href="#projects" onClick={updateCurrentState}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" onClick={updateCurrentState}>
              Contact
            </Nav.Link>
            {isMobile ? <NavbarFooter /> : null}
          </Nav>
        </Navbar.Collapse>
        {isMobile ? null : <NavbarFooter />}
      </Container>
    </Navbar>
  );
}
