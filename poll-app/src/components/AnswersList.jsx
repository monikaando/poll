import React from "react";
import "../styles/AnswersList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function AnswersList(props) {
  const answers = props.answers;
  const listAnswers = answers.map((item) => {
    return (
      <div
        className="list d-flex justify-content-between align-items-center bg-info border border-light rounded mb-2"
        key={item.key}
      >
        <textarea
          className="pl-3 mb-1 bg-transparent text-white border-0"
          type="text"
          wrap="soft"
          maxLength="81"
          id={item.key}
          value={item.value}
          onChange={(e) => {
            props.setUpdate(e.target.value, item.key);
          }}
        ></textarea>
        <span className="pr-2">
          <FontAwesomeIcon
            type="button"
            icon="times"
            onClick={() => props.deleteAnswer(item.key)}
          />
        </span>
      </div>
    );
  });
  return (
    <div className="mt-4">
      <FlipMove duration={400} easing="ease-in-out">
        {listAnswers}
      </FlipMove>
    </div>
  );
}
export default AnswersList;
