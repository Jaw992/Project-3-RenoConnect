import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function ContractorBar() {
  const userName = "Bob";
  const projectId = "Project #123";

  return (
    <div className="bg-primary-fixed">
      <Navbar className="bg-primary-color bar-control">
        <Container>
          <Navbar.Brand href="/">renoConnect</Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar className="bg-body-tertiary">
        <Container>
          <div>
            <div style={{ fontWeight: "600", fontSize: "1.2rem" }}>
              Contractor Workspace
            </div>
            <div style={{ fontWeight: "300" }}>
              <span>{userName}</span>
              <span> | </span>
              <span>{projectId}</span>
            </div>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} className="navLink" to="/contractor">
                Dashboard
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="navLink"
                to="//contractor/projectdetails"
              >
                Project Details
              </Nav.Link>
              <NavDropdown
                className="navLink"
                title="Phase Controls"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/contractor/create">
                  Create
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contractor/change">
                  Change
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default ContractorBar;
