import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import PhaseDetailsCard from "../components/PhaseDetailsCard";
import ProjectTrackingCard from "../components/ProjectTrackingCard";
import ChangeRequestCard from "../components/ChangeRequestCard";
import { fetchPhases } from "../services/apiPhase";

const CustomerDashboard = ({ token }) => {
  // const [selectedPhase, setSelectedPhase] = useState("Phase 1");

  // const handleChange = (e) => {
  //   selectedPhase(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Phase deleted: ", selectedPhase);
  // };

  const [phases, setPhases] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const loadPhases = async () => {
      try {
        const phasesData = await fetchPhases(token);
        console.log("customer phaseData:", phasesData);
        if (Array.isArray(phasesData)) {
          setPhases(phasesData);
          if (phasesData.length > 0) {
            setSelectedPhase(phasesData[0]._id);
          }
        } else {
          setError("Invalid data format received.");
        }
      } catch (error) {
        setError("Failed to load phases.");
        console.error("Error fetching phases:", error);
      }
    };

    loadPhases();
  }, [token]);

  const handleChange = (e) => {
    setSelectedPhase(e.target.value);
  };

  return (
    <div className="customer-bg pages-pad">
      <Container className="pages-custom-container">
        <h4 className="h3-custom">Dashboard</h4>
        <div className=" pages-box-shadow p-3">
          <h5 className="h3-custom mb-4">Project Tracking</h5>
          <div>
            <ProjectTrackingCard />
          </div>
        </div>

        <div className="pages-box-shadow p-3 mt-3">
          <h5 className="h3-custom">Change Requests: Pending Approval</h5>
          {selectedPhase && (
                <ChangeRequestCard
                  phase={phases.find((p) => p._id === selectedPhase)}
                  token={token}
                />
              )}
        </div>

        <Form className="pages-box-shadow p-3 mt-3">
          <h5 className="h3-custom">View/Delete Phase</h5>
          <Form.Group controlId="formPhaseSelect" className="mt-1">
            <Form.Label className="pages-form-labels">
              Select a phase:
            </Form.Label>
            <Form.Select value={selectedPhase} onChange={handleChange}>
              {phases.length > 0 ? (
                phases.map((phase) => (
                  <option key={phase._id} value={phase._id}>
                    {phase.phaseName}
                  </option>
                ))
              ) : (
                <option>No phases available</option>
              )}
            </Form.Select>
            <div className="mt-4">
              {selectedPhase && (
                <PhaseDetailsCard
                  phase={phases.find((p) => p._id === selectedPhase)}
                />
              )}
            </div>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default CustomerDashboard;
