const BASE_URL = "http://localhost:3000/api";

//* Create a new phase
export async function createPhase(data, token) {
  const url = `${BASE_URL}/phases`;
  try {
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
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export const fetchPhases = async (token) => {
  const url = `${BASE_URL}/phases`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("No phases found");
      }
      throw new Error("Failed to fetch phases");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching phases:", error.message);
    throw error;
  }
};

//* GET a specific phase by ID
export async function getPhase(phaseId, token) {
  const url = `${BASE_URL}/phases/${phaseId}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// //* Update a specific phase by ID
// export async function updatePhase(phaseId, data, token) {
//   const url = `${BASE_URL}/phases/${phaseId}`;
//   try {
//     const response = await fetch(url, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(error.message);
//     throw error;
//   }
// }

// //* Approve a specific phase by ID
// export async function approvePhase(phaseId, token) {
//   const url = `${BASE_URL}/phases/${phaseId}/approve`;
//   try {
//     const response = await fetch(url, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(error.message);
//     throw error;
//   }
// }

// //* Reject a specific phase by ID
// export async function rejectPhase(phaseId, token) {
//   const url = `${BASE_URL}/phases/${phaseId}/reject`;
//   try {
//     const response = await fetch(url, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(error.message);
//     throw error;
//   }
// }

//* Create new changeLog when phase details changes
export async function createChangeLog(phaseId, data, token) {
  const url = `${BASE_URL}/phases/${phaseId}/changeLog`;
  try {
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
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export async function getChangeLog(phaseId, changeLogId, token) {
  const url = `${BASE_URL}/phases/${phaseId}/changeLog/${changeLogId}`;
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
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

//* Delete a specific phase by ID
export async function deletePhase(phaseId, token) {
  const url = `${BASE_URL}/phases/delete/${phaseId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
