import React from "react";

import "./styles.css";

export default function Label(props) {
  return (
    <button
      className="label"
      style={{ backgroundColor: "#" + props.label.color }}
    >
      {props.label.name}
    </button>
  );
}
