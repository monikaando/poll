import React from "react";
import "../styles/Create.css";
import AnswersList from "./AnswersList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);
export default class Create extends React.Component {
  render() {
    let Alert;
    let AlertDisabled;
    let AlertSpaces;
    if (this.props.counter === 10) {
      Alert = (
        <div className="alert alert-danger" role="alert">
          You can't add more answers
        </div>
      );
    } else if (this.props.counter < 2) {
      Alert = (
        <div className="alert alert-warning" role="alert">
          Add question and at least 2 answers
        </div>
      );
    } else {
      Alert = null;
    }
    if (
      this.props.disabled === true ||
      this.props.question.value.length >= 82
    ) {
      AlertDisabled = (
        <div className="alert alert-danger" role="alert">
          You can add max 80 characters
        </div>
      );
    } else {
      AlertDisabled = null;
    }
    if (
      (this.props.question.value.length > 0 &&
        this.props.question.value.trim().length === 0) ||
      (this.props.currentAnswer.value &&
        this.props.currentAnswer.value.length > 0 &&
        this.props.currentAnswer.value.trim().length === 0)
    ) {
      AlertSpaces = (
        <div className="alert alert-danger" role="alert">
          You can't provie only spaces
        </div>
      );
    } else {
      AlertSpaces = null;
    }
    return (
      <div className="create-box">
        <div>
          <h2>Create</h2>
        </div>
        <div className="create-context d-flex flex-column justify-content-between">
          <div>
            <div>
              <input
                type="text"
                maxLength="81"
                className="form-control mb-3 mt-3 bg-warning"
                onInput={this.props.updateQuestion}
                value={this.props.question.value}
                placeholder="Type a question"
              />
              <AnswersList
                answers={this.props.answers}
                deleteAnswer={this.props.deleteAnswer}
                setUpdate={this.props.setUpdate}
              ></AnswersList>
              <form onSubmit={this.props.addAnswer}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    maxLength="80"
                    className="form-control bg-light text-dark"
                    id="add-answer-field"
                    placeholder="Type an answer"
                    aria-label="Type an answer"
                    aria-describedby="button-addon2"
                    value={this.props.currentAnswer.value}
                    onChange={this.props.handleInput}
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
            <div>
              {AlertSpaces}
              {AlertDisabled}
              {Alert}
            </div>
          </div>
          <div className="possible-answers d-flex d-md-flex flex-column flex-md-row justify-content-between align-items-end">
            <p className="m-0">{this.props.counter}/10 possible answers</p>
            <button
              className="btn btn-outline-secondary bg-danger text-white text-center pr-4 pl-4 mt-3 mt-md-0"
              type="button"
              value="reset"
              onClick={this.props.reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
