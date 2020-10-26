import React from "react";
import "../styles/Results.css";


export default class Results extends React.Component{
  render() {
  return (
    <div className="results-box d-flex flex-column justify-content-between">
      <h2>Results</h2>
      <div className="resuts-context">
        <h1>graph</h1>
      </div>
      <div className="total-votes">
        <p>Total votes: {this.props.votes}</p>
      </div>
    </div>
  );
};
}
