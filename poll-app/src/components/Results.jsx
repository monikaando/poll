import React from "react";
import "../styles/Results.css";


const Results = () => {
  return (
    <div className="results-box d-flex flex-column justify-content-between">
      <h2>Results</h2>
      <div className="resuts-context">
        <h1>graph</h1>
      </div>
      <div class="total-votes">
        <p>Total votes: 0</p>
      </div>
    </div>
  );
};

export default Results;
