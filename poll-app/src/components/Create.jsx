import React from "react";
import "../styles/Create.css";
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
      counter: 0,
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
      question: e.target.value,
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
    const answers = this.state.answers;
    const newAnswer = this.state.currentAnswer;
    if (newAnswer.value !== "" && answers.length < 10) {
      const newAnswers = [...this.state.answers, newAnswer];
      this.setState({
        answers: newAnswers,
        counter: this.state.counter + 1,
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
      counter: this.state.counter - 1,
    });
  }

  setUpdate(value, key) {
    const answers = this.state.answers;
    answers.map((item) => {
      if (item.key === key) {
        item.value = value;
      }
      return null;
    });
    this.setState({
      answers: answers,
    });
  }
  reset() {
    this.setState({
      question: "",
      answers: [],
      counter: 0,
      currentAnswer: {
        value: "",
        key: "",
      },
    });
  }
  render() {
    let Alert;
    if (this.state.counter === 10) {
      Alert = (
        <div class="alert alert-danger" role="alert">
          You can't add more answers
        </div>
      );
    } else {
      Alert = null;
    }
    return (
      <div className="create-box">
        <div>
          <h2>Create</h2>
        </div>
        <div className="create-context d-flex flex-column justify-content-between">
          <div>
            <input
              type="text"
              className="form-control mb-3 mt-3 bg-warning"
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
          </div>
          {Alert}
          <div className="possible-answers d-flex justify-content-between align-items-end">
            <p className="m-0">{this.state.counter}/10 possible answers</p>
            <button
              className="btn btn-outline-secondary bg-danger text-white pl-4 pr-4 pt-1 pb-1"
              type="button"
              value="reset"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
