import React, { Component } from "react";
import Navs from "./navs";
import Nav1 from "./nav1";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isSideMenuOpen: false,
    };
  }

  render() {
    return (
      <div>
        <Nav1 />
      </div>
    );
  }
}

export default Header;
