import './topbar.css'
import {Navbar,Container, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function AboutUs() {

 
  return (
    <Navbar  sticky="top" bg="light" expand="lg">
      <Navbar.Brand  href="/" fixed="top" >GUTS </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="topList me-auto">
          <Nav.Link className="topListItem" href="/">HOME</Nav.Link>
          <Nav.Link  className="topListItem" href="/">ABOUT US</Nav.Link>
          <Nav.Link  className="topListItem" href="/contact">CONTACT US </Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
  </Navbar> );
}
