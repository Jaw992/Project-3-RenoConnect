import { extractPayload } from "../../utils/jwUtils";

//? Contractor APIs

//* Contractor Signup
export async function contractorSignup(data) {
  const url = "/api/contractors/signup"; // can change
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

//* Contracor Login
export async function contractorLogin(data) {
  const url = "/api/contractors/login"; // can change
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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


  //* Load contractor Profile
  export async function contractorLoad(token) {
    const contractorId = extractPayload(token)._id;
    const url = `/api/contractors/${contractorId}`;
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
      return json;
    } catch (error) {
      console.log(error.message);
      throw error;
  }
}

//? Customer

//* Customer Signup
export async function customerSignup(data) {
  const url = "/api/customers/signup"; // can change
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

//* Customer Login
export async function customerLogin(data) {
  const url = "/api/customers/login"; //can change
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

//* Get Customer

export async function getCustomer(token) {
  const customerId = extractPayload(token)._id;
  const url = `/api/customers/${customerId}`;
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
    return json;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

//* PUT changeLog
export async function updateChangeLog(customerId, projectId, phaseId, changeLogId, reviewStatus, token) {
  const url = `/api/customers/${customerId}/${projectId}/phases/${phaseId}/changeLogs/${changeLogId}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ reviewStatus }),
    });

    if (!response.ok) {
      if (response.status === 404) {
        const responseText = await response.text();
        if (responseText.includes("Project not found")) {
          throw new Error("Not Found: The specified project could not be found.");
        } else if (responseText.includes("Phase not found")) {
          throw new Error("Not Found: The specified phase could not be found.");
        } else if (responseText.includes("Change log entry not found")) {
          throw new Error("Not Found: The specified change log entry could not be found.");
        } else {
          throw new Error("Not Found: The specified resource could not be found.");
        }
      } else {
        const errorText = await response.text();
        throw new Error(`Server Error: ${errorText}`);
      }
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating change log:", error.message);
    throw error;
  }
}