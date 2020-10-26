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
          type="checkbox"
          id={item.key}
          value={item.value}
          checked={false}
          name="answer"
          onChange={(e) => props.radioOnChange(e)} 
          
        />{item.value} - {item.votes}
      </div>
    );
  });
  return <div className="mt-4 pt-3">{voteAnswers}</div>;
}
export default VoteList;
