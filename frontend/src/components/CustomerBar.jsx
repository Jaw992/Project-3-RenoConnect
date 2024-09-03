import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

function CustomerBar({ setIsCustomerLoggedIn, setToken, customerProfile }) {
  console.log("customerProfile Prop:", customerProfile?.customer?.name); // Debugging line
  console.log("customerProfile Object:", customerProfile); // Debugging line

  const userName = customerProfile?.customer?.name || "";
  const projectId = "#123";
  const address = "Street 123";
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    setIsCustomerLoggedIn(false);
    navigate("/");
  };

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
              Your Dream Space
            </div>
            <div style={{ fontWeight: "300" }}>
              <span>{userName}</span>
              <span> | </span>
              <span>{projectId}</span>
              <span> | </span>
              <span>Address: {address}</span>
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} className="navLink" to="/customer">
                Dashboard
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="navLink"
                to="/customer/projectdetails"
              >
                Project Details
              </Nav.Link>
              <Nav.Link as="button" className="navLink" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomerBar;
