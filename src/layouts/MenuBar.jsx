import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

const MenuBar = memo(() => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">PaintSky Users</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className="nav nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav nav-link">
                About Us
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/contact" className="nav nav-link">
                Contact Us
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavItem>
              <Link to="/add/user" className="nav nav-link">
                Add User
              </Link>
            </NavItem>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
});

export default MenuBar;
