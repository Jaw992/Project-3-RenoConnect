import { useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";
// import { getChangeLog, fetchPhases } from "../services/apiPhase";
import { getCustomer } from "../services/apiUsers"

//? Renders All changeLogs
const ChangeRequestCard = ({ token }) => {
    const [phases, setPhases] = useState([]);
    const [changeLogs, setChangeLogs] = useState([]);
    const [error, setError] = useState("");
  
    // Fetch customer data including phases and change logs
    useEffect(() => {
      const loadCustomerData = async () => {
        try {
          const customerData = await getCustomer(token);
          setPhases(customerData.phases || []);
  
          // Create an array of change logs including phase information
          const allChangeLogs = customerData.phases.reduce((logs, phase) => {
            const phaseChangeLogs = phase.changeLog.map(log => ({
              ...log,
              phaseName: phase.phaseName, // Add phase name to each change log
            }));
            return logs.concat(phaseChangeLogs);
          }, []);
  
          setChangeLogs(allChangeLogs);
        } catch (error) {
          setError("Failed to load customer data.");
          console.error("Error fetching customer data:", error);
        }
      };
  
      loadCustomerData();
    }, [token]);
  
    // Determine if there are any changes
    const hasChanges = changeLogs.length > 0;
  
    // Render changed fields
    const renderChange = (log, field, label) => {
      const oldValue = log[`old${field}`];
      const newValue = log[`new${field}`];
  
      if (oldValue !== newValue) {
        return (
          <div className="changes-text-thin mt-4" key={label}>
            <h6 className="h3-custom mb-4">{label}:</h6>
            <p className="ms-3">Before: {oldValue || "N/A"}</p>
            <p className="ms-3">After: {newValue || "N/A"}</p>
          </div>
        );
      }
      return null;
    };
  
    return (
      <div>
        <Card
          className="mb-3"
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
          }}
        >
          <Card.Body>
            {hasChanges ? (
              changeLogs.map((log, index) => (
                <div key={index} className="mb-4">
                  <h5 className="h3-custom">{log.phaseName || "Phase Unknown"}</h5>
                  {renderChange(log, 'TaskDescription', 'Task Description')}
                  {renderChange(log, 'StartDate', 'Start Date')}
                  {renderChange(log, 'EndDate', 'End Date')}
                  {renderChange(log, 'Cost', 'Cost')}
                  <div className="mt-3">
                  </div>
                </div>
              ))
            ) : (
              <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
                No pending changes
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  };
  
  export default ChangeRequestCard;