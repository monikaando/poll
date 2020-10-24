import React from "react";

function AnswersList(props) {
  const answers = props.answers;
  const listAnswers = answers.map(item => {
    return (
      <div className="d-flex justify-content-between align-items-center bg-info text-white border border-light rounded mb-2" key={item.key}>
        <p className="pl-3 mb-1">{item.value}</p>
        <button
                className="btn bg-info text-white"
                type="submit"
                id="button-addon2"
              >
                X
              </button>
      </div>
    );
  });
  return <div className="mt-4">{listAnswers}</div>;
}
export default AnswersList;