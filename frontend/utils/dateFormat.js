// Function to format date for input forms (DD/MM/YYYY)
export const formatDateForInput = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Function to format date for display (DD/MM/YYYY)
export const formatDateForDisplay = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Function to convert date from DD/MM/YYYY to MM/DD/YYYY for MongoDB
export const convertDateForDB = (dateString) => {
  const [day, month, year] = dateString.split("/");
  return new Date(`${month}/${day}/${year}`).toISOString();
};

export const today = new Date();

export const getStartDate = (startDateString) => {
  return new Date(startDateString);
};

export const getEndDate = (endDateString) => {
  return new Date(endDateString);
};

export const determinePhaseStatus = (startDate, endDate) => {
  if (startDate > today) {
    return "Not Started";
  } else if (startDate <= today && endDate >= today) {
    return "In Progress";
  } else {
    return "Completed";
  }
};
