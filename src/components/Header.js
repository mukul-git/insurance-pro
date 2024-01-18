import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { auth } from "../firebaseConfig";
// import { Link } from "react-router-dom";

const Header = () => {
  const logoutHandle = (auth) => {
    // setAuthUser(null)
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Your Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link
            href="/"
            onClick={() => {
              logoutHandle(auth);
            }}
          >
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
