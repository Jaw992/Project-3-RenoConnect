import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-footer text-white">
      <Container>
        <Row>
          <Col className="text-center text-md-left">
            <p>
              &copy; {new Date().getFullYear()} RenoConnect. All rights
              reserved.
            </p>
          </Col>
          <Col className="text-center text-md-right">
            <a href="#!" className="text-white">
              Contact Us
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
