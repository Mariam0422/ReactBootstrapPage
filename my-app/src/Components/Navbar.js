import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
const NavbarCpmponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
        <Navbar.Brand>MashMo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-between">
          <Nav className="mr-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Users</Nav.Link>
            <Nav.Link >About</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" className="me-2">
              Log In
            </Button>
            <Button variant="primary">Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarCpmponent;
