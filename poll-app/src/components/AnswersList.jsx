import React from "react";

function AnswersList(props) {
  const answers = props.answers;
  const listAnswers = answers.map(item => {
    return (
      <div className="bg-info text-white border border-light rounded mb-2" key={item.key}>
        <p className="pl-3 mb-1">{item.value}</p>
      </div>
    );
  });
  return <div className="mt-4">{listAnswers}</div>;
}
export default AnswersList;
