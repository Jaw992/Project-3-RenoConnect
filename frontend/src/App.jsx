import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContractorBar from "./components/ContractorBar";
import CustomerBar from "./components/CustomerBar";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import CustomerLoginPage from "./pages/CustomerLoginPage";

function App() {
  return (
    <>
    <div className="app-gradient">
      <ContractorBar />
      <CustomerBar />
      <NavBar />
      <Container className="spaced-left-container">
        <h3 className="margin-top">Seamless Renovation Starts Here </h3>
        <h1 className="h1Bold">Connect Create Track</h1>
        <h5 className="paragraph">
          Connecting renovation contractors with their customers. Say goodbye to
          tracking renovation progress through cumbersome emails—keep everything
          organized and accessible in one place.
        </h5>
        <h3 className="margin-top">Get Started - Sign Up Here </h3>
        <div className="button-container mt-4">
          <Button className="custom-button-primary me-2">Contractor</Button>
          <Button className="custom-button-secondary">Customer</Button>
        </div>
      </Container>
    </div>
    <Routes>
      <Route path="/customers/login" element={<CustomerLoginPage />} />
    </Routes>
    </>
  );
}

export default App;
