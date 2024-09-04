// GanttChart.jsx
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { fetchPhases } from "../services/apiPhase";
import { parseISO } from "date-fns";

const GanttChart = ({ token }) => {
  const [phases, setPhases] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPhases = async () => {
      try {
        const phasesData = await fetchPhases(token);
        console.log("Phases data:", phasesData);
        if (Array.isArray(phasesData)) {
          setPhases(phasesData);
          if (phasesData.length > 0) {
          }
        } else {
          setError("Invalid data format received.");
        }
      } catch (error) {
        setError("Failed to load phases.");
        console.error("Error fetching phases:", error);
      }
    };

    loadPhases();
  }, [fetchPhases, token]);

  // https://developers.google.com/chart/interactive/docs/gallery/ganttchart#data-format
  // https://www.react-google-charts.com/examples/gantt#read-more

  // Columns of Gantt Chart
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];

  // Rows of Gantt Chart
  const rows = phases.map((phase) => {
    const startDate = parseISO(phase.startDate);
    const endDate = parseISO(phase.endDate);
    const duration = null;
    const percentComplete = "Check with contractor";
    const dependencies = null;
    const phaseNames = `${phase.phaseName || ""} | ${phase.task || ""}`;

    return [
      phase._id, // Task ID
      phase.phaseName, // Task Name
      phase.task, // Placeholder
      startDate, // Start Date
      endDate, // End Date
      duration, // Duration
      percentComplete, // Percent Complete
      dependencies, // Dependencies
    ];
  });

  const data = [columns, ...rows];

  const options = {
    height: 350,
    gantt: {
      trackHeight: 30,
      labelStyle: {
        fontName: "Source Sans 3",
        fontSize: 14, // Font size
        color: "white",
      },
    },

    backgroundColor: {
      fill: "#263238",
    },
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Chart
      chartType="Gantt"
      width="100%"
      height="50%"
      data={data}
      options={options}
    />
  );
};

export default GanttChart;
