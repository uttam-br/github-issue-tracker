import React from "react";

import "./styles.css";

import { PriorityHigh, DoneOutline } from "@material-ui/icons";

export default function StatusIcon(props) {
  return (
    <div className="status-icon">
      {props.status === "open" ? <PriorityHigh /> : <DoneOutline />}
    </div>
  );
}
