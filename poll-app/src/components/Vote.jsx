import React from "react";
import VoteList from "./VoteList";
import "../styles/Vote.css";

export default class Vote extends React.Component {
  render() {
    return (
      <div className="vote-box d-flex flex-column justify-content-between">
      
        <div>
          <h2>Vote</h2>
        </div>
        <div className="vote-context d-flex flex-column justify-content-between mt-3">
          <div>
            <div className="mb-4">
              <h5>{this.props.question.value}</h5>
            </div>
            <VoteList
              answers={this.props.answers}
              radioOnChange = {this.props.radioOnChange}
            ></VoteList>
          </div>
        </div>
       <div>
       </div>
        <div className="mb-2 align-self-end">
        <button
          className="btn btn-outline-secondary bg-info text-white text-center pr-5 pl-5"
          id="btnVote"
          type="button"
          onClick={this.props.onVoteClick}
        >
          Vote
        </button>
        </div>
      </div>
    );
  }
}
