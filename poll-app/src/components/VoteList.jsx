import React from "react";

function VoteList(props) {
  const answers = props.answers;
  const voteAnswers = answers.map((item) => {
    return (
      <div className="answer-box form-check" key={item.key}>
        <input
          className="radio form-check-input"
          type="radio"
          id={item.key}
          value={item.value}
          name="answer"
          onChange={(e) => props.radioOnChange(e)}
        />
        {item.value}
      </div>
    );
  });
  return <div className="mt-4 pt-3">{voteAnswers}</div>;
}
export default VoteList;
