import { extractPayload } from "../../utils/jwUtils";

//get
export async function projectDetailsLoad() {
  // const projectId = extractPayload(token)._id;
  const token = localStorage.getItem("authToken");

  const url = `/api/projects`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // localStorage.setItem("authToken", json.token);
    return json;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

//show
export async function showProjectDetails(id) {
  const url = `/api/projects/${id}`;
  try {
    const token = localStorage.getItem("authToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    // localStorage.setItem("authToken", json.token);
    return json;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

// create
export async function contractorProjectDetails(data) {
  const url = "/api/projects";
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

//edit
export async function contractorProjectDetailsEdit(id, formData, token) {
  // const projectId = extractPayload(token)._id;
  const url = `/api/projects/${id}`;
  try {
    const token = localStorage.getItem("authToken");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
       body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating project:", error.message);
    throw error;
  }
}