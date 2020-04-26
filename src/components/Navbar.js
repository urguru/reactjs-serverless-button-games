import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavbarFinal() {
    return (
      <Navbar bg="dark" variant='dark' expand="lg">
        <Navbar.Brand href="/">Button Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/level_1">Level 1</Nav.Link>
            <Nav.Link href="/level_2">Level 2</Nav.Link>
            <Nav.Link href="/level_3">Level 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
