import React from "react";
import { Bar } from "react-chartjs-2";
import "../styles/Results.css";

export default class Results extends React.Component {
  render() {
    return (
      <div className="results-box d-flex flex-column justify-content-between">
       <div>
        <h2>Results</h2>
        <div className="mt-4">
          <h5>{this.props.question.value}</h5>
        </div>
        </div>
        <div className="chart">
            <Bar
            data={this.props.chartData}
            // minHeight={635}
            options={{
              responsive: true,
              legend: {
                display: false,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      min: 0,
                      stepSize: 1,
                    },
                  },
                ],
                xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0
                }
            }]
              },
            }}
          />
        </div>
        <div className="total-votes mt-5">
          <p>Total votes: {this.props.votes}</p>
        </div>
      </div>
    );
  }
}
