// import { useState } from "react";
import { Card } from "react-bootstrap";

const ChangeRequestCard = () => {

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
            Phase 1
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            Task Description
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            Before: paint living room
          </Card.Text>
          <Card.Text className="mb-1" style={{ fontWeight: "500" }}>
            Before: paint masterbed room
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  };
  
  export default ChangeRequestCard;