import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
              <Nav.Link className="navLink" href="#home">
                Dashboard
              </Nav.Link>
              <Nav.Link className="navLink" href="#link">
                Project Details
              </Nav.Link>
              <NavDropdown
                className="navLink"
                title="Phase Controls"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Create</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Edit</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  View/Submit/Delete
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
