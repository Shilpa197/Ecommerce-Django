import React from "react";
//import Button from "react-bootstrap/Button";
import {Navbar, Nav,Container} from "react-bootstrap";
//import Form from "react-bootstrap/Form";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>Shop£ase</Navbar.Brand>
        </LinkContainer>
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              >

            <LinkContainer to="/">
            <Nav.Link><i className="fas fa-home"></i>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
            <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
            <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
            </LinkContainer>
            
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
