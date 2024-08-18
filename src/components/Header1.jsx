import React, { useState } from 'react';
import { Button, Nav, Tab, Container, Row, Col } from 'react-bootstrap';

import CartOffcanvas from './CartOffcanvas'
import MenuOffcanvas from './MenuOffcanvas'

const Header1 = () => {

    
  return (
    <div className="navbar navbar-light bg-light fixed-top text-white"  style={{ background: 'linear-gradient(360deg, #ff7e5f, #feb47b)' }}>

      <div className="container-fluid">
        
        {<MenuOffcanvas />}
        <div className="d-flex align-items-center">

          
            {<CartOffcanvas />}
          
          <a href="#" className="nav-link ">
            <i className="fas fa-user"></i>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Header1