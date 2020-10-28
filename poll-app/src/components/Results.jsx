import React from "react";
import { Bar } from "react-chartjs-2";
import "../styles/Results.css";

export default class Results extends React.Component {
  render() {
    return (
      <div className="results-box d-flex flex-column justify-content-between mt-5 mt-md-0">
        <h2>Results</h2>
        <div className="results-context d-flex flex-column justify-content-between">
          <div>
            <div className="mt-3">
              <h5>{this.props.question.value}</h5>
            </div>
            <div className="chart">
              <Bar
                data={this.props.chartData}
                height={300}
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
                  },
                }}
              />
            </div>
          </div>
          <div className="total-votes">
            <p>Total votes: {this.props.votes}</p>
          </div>
        </div>
      </div>
    );
  }
}
