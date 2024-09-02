const ProjectDetailsCard = ({ phase, viewMode }) => {
    return (
      <div>
        <h5>Project Details Card</h5>
        <p>Project ID: {phase.projectId}</p>
        <p>Project Address: {phase.projectAddress}</p>
        <p>Total Phases: {phase.totalPhases}</p>
        <p>Down Payment (%): {phase.downPaymentPercent}</p>
        <p>Down Payment Received ($): {phase.downPaymentReceived}</p>
        <p>Total Project Cost ($): {phase.totalProjectCost}</p>
      </div>
    );
  };
  
  export default ProjectDetailsCard;