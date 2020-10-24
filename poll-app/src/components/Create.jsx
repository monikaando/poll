import React from "react";
import AnswersList from "./AnswersList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);
export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answers: [],
      currentAnswer: {
        value: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.reset = this.reset.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
  }
  updateQuestion(e) {
    this.setState({
      question: e.target.value
    });
  }
  handleInput(e) {
    this.setState({
      currentAnswer: {
        value: e.target.value,
        key: Date.now(),
      },
    });
  }
  addAnswer(e) {
    e.preventDefault();
    const newAnswer = this.state.currentAnswer;
    console.log(newAnswer);
    if (newAnswer.value !== "") {
      const newAnswers = [...this.state.answers, newAnswer];
      this.setState({
        answers: newAnswers,
        currentAnswer: {
          value: "",
          key: "",
        },
      });
    }
  }
  deleteAnswer(key) {
    const filteredAnswers = this.state.answers.filter(
      (item) => item.key !== key
    );
    this.setState({
      answers: filteredAnswers,
    });
  }
  setUpdate(value, key) {
    const answers = this.state.answers;
    answers.map((item) => {
      if (item.key === key) {
        item.value = value;
      }
    });
    this.setState({
      answers: answers,
    });
  }
  reset() {
    this.setState({
      question: "",
      answers: [],
      currentAnswer: {
        value: "",
        key: "",
      },
    });
  }
  render() {
    return (
      <div>
        <div>
          <h2>Create</h2>
        </div>

        <input
          type="text"
          className="form-control mb-3 mt-5 bg-warning"
          value={this.state.question}
          onChange={this.updateQuestion}
          placeholder="Question"
        />
        <AnswersList
          answers={this.state.answers}
          deleteAnswer={this.deleteAnswer}
          setUpdate={this.setUpdate}
        ></AnswersList>
        <form onSubmit={this.addAnswer}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control bg-light text-dark"
              placeholder="Type an answer"
              aria-label="Type an answer"
              aria-describedby="button-addon2"
              value={this.state.currentAnswer.value}
              onChange={this.handleInput}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary bg-info text-white"
                type="submit"
                id="button-addon2"
              >
                Add
              </button>
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-between align-items-center">
          <p>1/10 possible answers</p>
          <button type="button" value="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
