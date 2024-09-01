import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import ContractorBar from "./components/ContractorBar";
import CustomerBar from "./components/CustomerBar";
import Navibar from "./components/Navibar";
import Footer from "./components/Footer";
import ContractorLogin from "./pages/ContractorLogin";
import CustomerLogin from "./pages/CustomerLogin";
import ContractorSignup from "./pages/ContractorSignup";
import CustomerSignup from "./pages/CustomerSignup";
import ContractorDashboard from "./pages/ContractorDashboard";
import ContractorProjectDetails from "./pages/ContractorProjectDetails";
import ContractorCreate from "./pages/ContractorCreate";
import ContractorChange from "./pages/ContractorChange";
import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerProjectDetails from "./pages/CustomerProjectDetails";
import bgImage from "./assets/b1.jpg";
import { Link } from "react-router-dom";
import "./css/styles.css";

function App() {
    const [token, setToken] = useState("");

  return (
    <div className="homeContent">
      {/* /* <ContractorBar /> */}
      <CustomerBar /> */
      {/* <Navibar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="homeSection">
                <img
                  src={bgImage}
                  alt="Background"
                  className="background-image"
                />
                <Container className="caption-container">
                  <h3 className="margin-top">
                    Seamless Renovation Starts Here
                  </h3>
                  <h1 className="h1Bold">Connect Create Track</h1>
                  <h5 className="paragraph">
                    Connecting renovation contractors with their customers. Say
                    goodbye to tracking renovation progress through cumbersome
                    emails—keep everything organized and accessible in one
                    place.
                  </h5>
                  <h3 className="margin-top">Get Started - Sign Up Here</h3>
                  <div className="button-container mt-4">
                    <Link to="/contractor/signup">
                      <Button className="custom-button-primary me-2">
                        Contractor
                      </Button>
                    </Link>
                    <Link to="/customer/signup">
                      <Button className="custom-button-secondary">
                        Customer
                      </Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>
          }
        />
        <Route path="/contractor/login" element={<ContractorLogin setToken={setToken} />} />
        <Route path="/customer/login" element={<CustomerLogin setToken={setToken} />} />
        <Route path="/contractor/signup" element={<ContractorSignup setToken={setToken} />} />
        <Route path="/customer/signup" element={<CustomerSignup setToken={setToken} />} />
        <Route path="/contractor" element={<ContractorDashboard />} />
        <Route
          path="/contractor/projectdetails"
          element={<ContractorProjectDetails />}
        />
        <Route path="/contractor/create" element={<ContractorCreate />} />
        <Route path="/contractor/change" element={<ContractorChange />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route
          path="/customer/projectdetails"
          element={<CustomerProjectDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;