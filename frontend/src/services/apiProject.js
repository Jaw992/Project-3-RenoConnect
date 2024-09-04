import { extractPayload } from "../../utils/jwUtils";

//get
export async function projectDetailsLoad() {
  // const projectId = extractPayload(token)._id;
  const token = localStorage.getItem("authToken");

  const url = `http://localhost:3000/api/projects`;
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
export async function showProjectDetails(id, token) {
  const url = `http://localhost:3000/api/projects/${id}`;
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
    return json.token;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

// create
export async function contractorProjectDetails(data) {
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

//edit
export async function contractorProjectDetailsEdit(data) {
  // const projectId = extractPayload(token)._id;
  const url = `http://localhost:3000/api/projects/${data.projectId}`;
  console.log(data);
  try {
    const token = localStorage.getItem("authToken");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(data),
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
