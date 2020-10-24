import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AnswersList(props) {
  const answers = props.answers;
  const listAnswers = answers.map((item) => {
    return (
      <div
        className="d-flex justify-content-between align-items-center bg-info text-white border border-light rounded mb-2"
        key={item.key}
      >
        <p className="pl-3 mb-1 d-flex justify-content-between align-items-center">
        <input type="text" id={item.key} value={item.value} className="bg-transparent border-0"></input>
        </p>
        <span className="pr-2">
            <FontAwesomeIcon className="faicons" icon="times" onClick={()=>props.deleteAnswer(item.key)}/>
          </span>
      </div>
    );
  });
  return <div className="mt-4">{listAnswers}</div>;
}
export default AnswersList;
