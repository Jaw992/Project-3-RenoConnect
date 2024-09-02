const BASE_URL = "http://localhost:3000/api/phases";

export async function createPhase(data) {
  const url = `${BASE_URL}/`;
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
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function getPhase(phaseId) {
  const url = `${BASE_URL}/${phaseId}`;
  try {
    const response = await fetch(url, {
      method: "GET",
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

export async function updatePhase(phaseId, data) {
  const url = `${BASE_URL}/update/${phaseId}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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

export async function approvePhase(phaseId) {
  const url = `${BASE_URL}/${phaseId}/approve`;
  try {
    const response = await fetch(url, {
      method: "PUT",
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

export async function rejectPhase(phaseId) {
  const url = `${BASE_URL}/${phaseId}/reject`;
  try {
    const response = await fetch(url, {
      method: "PUT",
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

export async function deletePhase(phaseId) {
  const url = `${BASE_URL}/delete/${phaseId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
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
