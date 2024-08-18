import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import "../styles/navbar.scss"

const Nav1 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">MyLogo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMobileMenu} />
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button variant="outline-light" className="ms-2">Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Off-Canvas Menu for Mobile */}
      <div className={`offcanvas-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Button variant="outline-light" className="close-btn" onClick={toggleMobileMenu}>
          &times;
        </Button>
        <Nav className="flex-column">
          <Nav.Link href="#home" onClick={toggleMobileMenu}>Home</Nav.Link>
          <Nav.Link href="#about" onClick={toggleMobileMenu}>About</Nav.Link>
          <Nav.Link href="#services" onClick={toggleMobileMenu}>Services</Nav.Link>
          <Nav.Link href="#contact" onClick={toggleMobileMenu}>Contact</Nav.Link>
          <Button variant="outline-light" className="mt-3" onClick={toggleMobileMenu}>Sign Up</Button>
        </Nav>
      </div>
      <div className={`overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
    </>
  )
}

export default Nav1