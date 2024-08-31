import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navibar() {
  return (
    <>
      <Navbar className="bbg-primary-fixed  bg-primary-color ">
        <Container>
          <Navbar.Brand href="/">renoConnect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} className="navLink" to="/customer/login">
                Customer Login
              </Nav.Link>
              <Nav.Link as={Link} className="navLink" to="/contractor/login">
                Contractor Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;
