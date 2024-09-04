import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getChangeLog } from "../services/apiPhase";

// const ChangeRequestCard = () => {

//     return (
//       <div>
//         <Card
//         className="mb-3"
//         style={{
//           backgroundColor: "transparent",
//           color: "white",
//           border: "none",
//         }}
//       >
//         <Card.Body>
//           <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
//             <strong>Phase 1</strong>
//           </Card.Text>
//           <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
//             Task Description
//           </Card.Text>
//           <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
//             Before: paint living room
//           </Card.Text>
//           <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
//             After: paint masterbed room
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       </div>
//     );
//   };

const ChangeRequestCard = ({ phase, token }) => {
  const [changeLog, setChangeLog] = useState([]);

  useEffect(() => {
    const loadChangeLog = async () => {
        const changeLogData = await getChangeLog(token);
        console.log("At RequestCard", phase);
        console.log("CL data:", changeLogData);
        if (Array.isArray(changeLogData)) {
          setChangeLog(changeLogData);
          if (changeLogData.length > 0) {
            setChangeLog(changeLogData[0]._id);
          }
        } 
    };

    loadChangeLog();
  }, [phase,token]);

  return (
    <div>
      <Card
        className="mb-3"
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
      >
        <Card.Body>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            <strong>{phase.phaseName || "No Phase"}</strong>
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            Task Description
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            Before: {changeLog.oldTaskDescription || "N/A"}
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            After: {changeLog.newTaskDescription || "N/A"}
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            Start Date
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            Before: {changeLog.oldStartDate || "N/A"}
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            After: {changeLog.newStartDate|| "N/A"}
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            End Date
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            Before: {changeLog.oldEndDate || "N/A"}
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            After: {changeLog.newEndDate || "N/A"}
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            Cost
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            Before: {changeLog.oldCost || "N/A"}
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            After: {changeLog.newCost || "N/A"}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChangeRequestCard;