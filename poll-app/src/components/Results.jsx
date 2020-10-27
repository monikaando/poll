import React from "react";
import { Bar } from "react-chartjs-2";
import "../styles/Results.css";

export default class Results extends React.Component {
  render() {
    return (
      <div className="results-box d-flex flex-column justify-content-between">
        <h2>Results</h2>
        <div className="mb-3 mt-3">
          <h5>{this.props.question.value}</h5>
        </div>
        <div className="chart">
          <Bar
            data={this.props.chartData}
            height={335}
            options={{
              legend: {
                display:false,
              }
            }}
          />
        </div>
        <div className="total-votes mt-4">
          <p>Total votes: {this.props.votes}</p>
        </div>
      </div>
    );
  }
}
