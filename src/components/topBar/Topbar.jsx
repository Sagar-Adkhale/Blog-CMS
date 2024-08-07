import "./topbar.css";
import { Navbar, Nav } from "react-bootstrap";

export default function AboutUs() {
  return (
    <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/" fixed="top">
        GUTS{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="topList me-auto">
          <Nav.Link className="topListItem" href="/">
            DIARIES
          </Nav.Link>
          {/* <Nav.Link className="topListItem" href="/shop">
            SHOP
          </Nav.Link> */}
          <Nav.Link className="topListItem" href="/contact">
            CONTACT US{" "}
          </Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
