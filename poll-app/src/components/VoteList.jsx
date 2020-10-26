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
          value={item.value}
          checked={!!item.value}
          name="answer"
        //   onChange={(e) => {
        //       props.radioOnChange(e.target.key);
        //     }}
          onChange={e => this.radioOnChange(e)}
            
        />{item.value}
        {/* <label className="form-check-label" htmlFor={item.key}>
          
        </label> */}
      </div>
    );
  });
  return <div className="mt-4 pt-3">{voteAnswers}</div>;
}
export default VoteList;
