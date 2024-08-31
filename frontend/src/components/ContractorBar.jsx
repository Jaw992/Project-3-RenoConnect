import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function ContractorBar() {
  const userName = "Jared";
  const projectId = "Project #Owen";

  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">renoConnect</Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-body-tertiary-contractor">
        <Container>
          <div>
            <Navbar.Brand style={{ fontWeight: "600", color: "#EBE9E1" }}>
              Contractor Workspace
            </Navbar.Brand>
            <div style={{ fontWeight: "400" }}>
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
    </>
  );
}

export default ContractorBar;
