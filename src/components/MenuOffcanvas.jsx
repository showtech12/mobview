import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

import '../styles/ButtomTab.scss';

const MenuOffcanvas = () => {
  const [show, setShow] = useState(false);
  const [activeMenus, setActiveMenus] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleMenu = (menu) => {
    setActiveMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        <i className="fas fa-bars"></i> Menu
      </Button> */}



    <a href="#" onClick={handleShow} className="navbar-brand">
          <i className="fas fa-bars"></i>
        </a>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Main Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products" onClick={() => toggleMenu('products')} className="d-flex justify-content-between align-items-center">
                Products <span>{activeMenus['products'] ? '−' : '+'}</span>
              </a>
              <ul className={`list-unstyled ps-3 ${activeMenus['products'] ? 'show' : 'collapse'}`}>
                <li><a href="#category1">Category 1</a></li>
                <li><a href="#category2">Category 2</a></li>
                <li><a href="#category3">Category 3</a></li>
              </ul>
            </li>
            <li>
              <a href="#services" onClick={() => toggleMenu('services')} className="d-flex justify-content-between align-items-center">
                Services <span>{activeMenus['services'] ? '−' : '+'}</span>
              </a>
              <ul className={`list-unstyled ps-3 ${activeMenus['services'] ? 'show' : 'collapse'}`}>
                <li><a href="#service1">Service 1</a></li>
                <li><a href="#service2">Service 2</a></li>
                <li>
                  <a href="#more-services" onClick={() => toggleMenu('more-services')} className="d-flex justify-content-between align-items-center">
                    More Services <span>{activeMenus['more-services'] ? '−' : '+'}</span>
                  </a>
                  <ul className={`list-unstyled ps-3 ${activeMenus['more-services'] ? 'show' : 'collapse'}`}>
                    <li><a href="#subservice1">Sub-service 1</a></li>
                    <li><a href="#subservice2">Sub-service 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MenuOffcanvas;
