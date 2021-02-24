import React from "react";

import "./styles.css";

export default function Pagination(props) {
  const nextPage = () => {
    if (props.current >= props.max) return;
    props.setPage(props.current + 1);
  };
  const previousPage = () => {
    if (props.current <= props.min) return;
    props.setPage(props.current - 1);
  };
  return (
    <div className="pagination-buttons-container">
      <button onClick={previousPage}>Previous</button>
      {/* back pages */}
      <button>{props.current}</button>
      {/* forward pages  */}
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
