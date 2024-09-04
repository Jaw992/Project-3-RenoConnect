import { format, parseISO, isToday, isBefore, isAfter } from "date-fns";

// Format date for display (DD/MM/YYYY)
export const formatDateForDisplay = (dateString) => {
  if (!dateString) return "N/A";
  const date = parseISO(dateString);
  return format(date, "dd/MM/yyyy");
};

// Determine the phase status based on the current date, start date, and end date
export const determinePhaseStatus = (startDate, endDate) => {
  const today = new Date();

  if (isBefore(today, startDate)) {
    return "Not Started";
  } else if (
    isToday(today) ||
    (isAfter(today, startDate) && isBefore(today, endDate))
  ) {
    return "In Progress";
  } else {
    return "Completed";
  }
};
