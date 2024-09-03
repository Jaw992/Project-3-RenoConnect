import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ProjectDetailsCard from "../components/ProjectDetailsCard";
import { useParams } from "react-router-dom"; // Import useParams


// import ProjectTrackingCard from "../components/ProjectTrackingCard";

async function contractorProjectDetails(data) {
  const url = "http://localhost:3000/api/projects";
  try {
    const token = localStorage.getItem("authToken");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.token;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

async function contractorProjectDetailsEdit(data, projectId) {
  const url = `http://localhost:3000/api/projects/:${projectId}`;
  console.log("PUT URL:", url);
  console.log("PUT Data:", data);

  try {
    const token = localStorage.getItem("authToken");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json.token;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

const ContractorProjectDetails = () => {
  const { projectId } = useParams();
  const [formData, setFormData] = useState({
    projectId: "",
    projectAddress: "",
    projectPhaseCount: 0,
    projectDownPayment: 0,
    projectPaymentReceived: 0,
    projectTotalCost: 0,
  });

  const [successMessage, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState("create");

  const [save, setSave] = useState({
    projectId: "",
    projectAddress: "",
    projectPhaseCount: 0,
    projectDownPayment: 0,
    projectPaymentReceived: 0,
    projectTotalCost: 0,
  });

  //update edit mode when projectId is same
  useEffect(() => {
    if (formData.projectId && formData.projectId !== save.projectId) {
      setMode("edit");
    } else {
      setMode("create");
    }
  }, [formData.projectId, save.projectId]);

  const handleSave = (event) => {
    event.preventDefault();
    setSave(formData);
    setSuccess("Project Details Saved!");
    setError("");
  };

  // const handleEdit = (event) => {
  //   event.preventDefault();
  //   setFormData(save);
  //   setEdit(true);
  //   setMode("edit");
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (mode === "edit") {
        await contractorProjectDetailsEdit(formData);
        setSuccess("Project Details Updated!");
      } else {
        await contractorProjectDetails(formData);
        setSuccess("Project Details Created!");
      }
      setError("");
      setSave(formData);
      setMode("create");
    } catch (error) {
      setError(error.message);
      setSuccess("");
    }
  };

  return (
    <div className="contractor-bg pages-pad">
      <Container className="pages-custom-container">
        <h4 className="h3-custom">Project Details</h4>
        <div className="pages-box-shadow p-3 p-projectTracking">
          <ProjectDetailsCard
            phase={save}
            viewMode={mode} />
        </div>
        <div className="pages-box-shadow p-3 mt-3">
          <button
            onClick={() => setMode("create")}
            disabled={mode === "create"}
            className="custom-button-primary"
          >
            Create
          </button>
          <button
            onClick={() => setMode("edit")}
            disabled={mode === "edit"}
            className="custom-button-primary"
          >
            Edit
          </button>
          <h5 className="h3-custom">
            {mode === "edit" ? "Edit Project" : "Create Project"}
          </h5>

          <Form onSubmit={handleSubmit} className="formLabel mt-2 p-3">
            <Form.Group controlId="formProjectId">
              <Form.Label>Project ID</Form.Label>
              <Form.Control
                type="text"
                name="projectId"
                placeholder="Enter your project ID"
                value={formData.projectId}
                onChange={handleChange}
                // disabled={mode === "edit"} // Disable input in edit mode
              />
            </Form.Group>

            <Form.Group controlId="formProjectAddress" className="mt-3">
              <Form.Label>
                Project Address / Property under renovation
              </Form.Label>
              <Form.Control
                type="text"
                name="projectAddress"
                placeholder="Enter your project address"
                value={formData.projectAddress}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTotalPhases" className="mt-3">
              <Form.Label>Total Phases</Form.Label>
              <Form.Control
                type="number"
                name="projectPhaseCount"
                placeholder="Enter total phases"
                value={formData.projectPhaseCount}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDownPaymentPercent" className="mt-3">
              <Form.Label>Down Payment (%)</Form.Label>
              <Form.Control
                type="number"
                name="projectDownPayment"
                placeholder="Enter down payment percentage"
                value={formData.projectDownPayment}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDownPaymentReceived" className="mt-3">
              <Form.Label>Down Payment Received ($)</Form.Label>
              <Form.Control
                type="number"
                name="projectPaymentReceived"
                placeholder="Enter down payment received"
                value={formData.projectPaymentReceived}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTotalProjectCost" className="mt-3">
              <Form.Label>Total Project Cost ($)</Form.Label>
              <Form.Control
                type="number"
                name="projectTotalCost"
                placeholder="Enter total project cost"
                value={formData.projectTotalCost}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="button-container mt-3">
              <Button
                type="submit"
                className="custom-button-primary"
              >
                {mode === "edit" ? "Update" : "Create"}
              </Button>
              {error && <p className="error mt-3">{error}</p>}
              {successMessage && (
                <p className="success mt-3">{successMessage}</p>
              )}
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ContractorProjectDetails;
