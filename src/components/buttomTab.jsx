import React, { useState } from 'react';
import { Button, Nav, Tab, Container, Row, Col } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
// import '../styles/ButtomTab.scss';

const ButtomTab = () => {

    //  const [activeTab, setActiveTab] = useState('home');

    // const handleTab = (tab) => {
       
    //     setActiveTab(tab);
    // }

  return (
  //rgb(14 57 65)
    <nav className="navbar navbar-light bg-info navbar-expand fixed-bottom rounded-4 p-3 m-3" style={{ background: 'linear-gradient(360deg, #ff7e5f, #feb47b)' , fontSize:'14px' }}>
        
    <div className="container-fluid justify-content-around">

    <NavLink
        to="/home"
        className={({ isActive }) =>
          `nav-link text-center ${isActive ? 'text-white  ' : 'text-dark'}`
        }
      >
        <i className="fas fa-home"></i>
        <br />
        Home
      </NavLink>

      <NavLink
        to="/order"
        className={({ isActive }) =>
          `nav-link text-center ${isActive ? 'text-white ' : 'text-dark'}`
        }
      >
        <i className="fas fa-shopping-bag"></i>
        <br />
        Order
      </NavLink>

      <NavLink
        to="/chart"
        className={({ isActive }) =>
          `nav-link text-center ${isActive ? 'text-white fw-bold  ' : 'text-dark'}`
        }
       
      >
        <i className="fas fa-chart-line"></i>
        <br />
        Chart
      </NavLink>

      <NavLink
        to="/account"
        className={({ isActive }) =>
          `nav-link text-center ${isActive ? 'text-white ' : 'text-dark'}`
        }
      >
        <i className="fas fa-user"></i>
        <br />
        Account
      </NavLink>


    </div>
  </nav>
    
  )
}

export default ButtomTab