import React from "react";
import "../styles/AnswersList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AnswersList(props) {
  const answers = props.answers;
  const listAnswers = answers.map((item) => {
    return (
      <div
        className="list d-flex justify-content-between align-items-center bg-info text-white border border-light rounded mb-2"
        key={item.key}
      >
        <p className="pl-3 mb-1 d-flex justify-content-between align-items-center">
        <input className="bg-transparent border-0" type="text" id={item.key} value={item.value} onChange={
            (e)=>{
                props.setUpdate(e.target.value,item.key)
            }
        } ></input>
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
