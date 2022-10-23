import { Link} from "react-router-dom";
import React from 'react';
import {  Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">Product</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-students" to="/">Shop</Link>
            <Link className="nav-addStudents" to="/addProduct">Add Product</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavbarMenu;