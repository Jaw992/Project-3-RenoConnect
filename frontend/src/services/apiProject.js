import { extractPayload } from "../../utils/jwUtils";

export async function projectDetailsLoad(token) {
  const projectId = extractPayload(token)._id;
  const url = `http://localhost:3000/api/projects/${projectId}`;
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
export async function contractorProjectDetails(data, token) {
    const url = "http://localhost:3000/api/projects";
    try {
      // const token = localStorage.getItem("authToken");
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
export async function contractorProjectDetailsEdit(data, token) {
    // const projectId = extractPayload(token)._id;
    const url = `http://localhost:3000/api/projects/_i`;

    console.log(data);
    try {
      // const token = localStorage.getItem("authToken");
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