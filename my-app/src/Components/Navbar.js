import { useState } from "react";
import { Button, Nav, Navbar, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavbarCpmponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="p-3"
      >
        <Navbar.Brand>MashMo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex justify-content-between"
        >
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/users">Users</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="./about">About</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" className="me-2" onClick={handleShow}>
              Log In
            </Button>
            <Button variant="primary" onClick={handleShow}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text>
                We all never share your email with other people
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">                 
                   <Form.Check type="checkbox" label="Remember me"/>                
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarCpmponent;
