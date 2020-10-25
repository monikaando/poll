import React from "react";

function VoteList(props) {
  const answers = props.answers;
  const voteAnswers = answers.map((item) => {
    return (
      <div
        className="answer-box form-check"
        key={item.key}
      >
        <input
          className="form-check-input"
          type="radio"
          id={item.key}
          checked={false}
          name="answer"
          onChange={() => props.votesCount(item.key)}
        />
        <label className="form-check-label" htmlFor={item.key}>
          {item.value}
        </label>
      </div>
    );
  });
  return <div className="mt-4 pt-3">{voteAnswers}</div>;
}
export default VoteList;
