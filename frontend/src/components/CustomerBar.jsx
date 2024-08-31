import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomerBar() {
  const userName = "Jared";
  const projectId = "Project #Owen";

  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">renoConnect</Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-body-tertiary-customer">
        <Container>
          <div>
            <Navbar.Brand style={{ fontWeight: "600", color: "#2E3F52" }}>
              Your Dream Space
            </Navbar.Brand>
            <div style={{ fontWeight: "400", color: "#2E3F52" }}>
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
              <Nav.Link className="navLink" href="#link">
                Review
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomerBar;
