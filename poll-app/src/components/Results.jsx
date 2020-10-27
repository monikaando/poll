import React from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

import "../styles/Results.css";

export default class Results extends React.Component {
  render() {
    return (
      <div className="results-box d-flex flex-column justify-content-between">
        <h2>Results</h2>
        <div className="mb-4">
              <h5>{this.props.question.value}</h5>
            </div>
        <div className="chart">
          <Bar
            data={this.props.chartData}
            width={150}
            height={600}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="total-votes">
          <p>Total votes: {this.props.votes}</p>
        </div>
      </div>
    );
  }
}
