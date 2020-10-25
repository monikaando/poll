import React from "react";
import "../styles/Create.css";
import AnswersList from "./AnswersList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);
export default class Create extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     question: {
  //       value: "",
  //     },
  //     answers: [],
  //     counter: 0,
  //     disabled: false,
  //     currentAnswer: {
  //       value: "",
  //       key: "",
  //     },
  //   };
  //   this.handleInput = this.handleInput.bind(this);
  //   this.addAnswer = this.addAnswer.bind(this);
  //   this.deleteAnswer = this.deleteAnswer.bind(this);
  //   this.setUpdate = this.setUpdate.bind(this);
  //   this.reset = this.reset.bind(this);
  //   this.updateQuestion = this.updateQuestion.bind(this);
  //   this.disableFields = this.disableFields.bind(this);
  // }

  // updateQuestion(e) {
  //   const questionText = this.state.question.value.length;
  //   this.setState({
  //     question: {
  //       value: e.target.value,
  //     },
  //   });
  //   this.disableFields(questionText);
  // }
  // handleInput(e) {
  //   this.setState({
  //     currentAnswer: {
  //       value: e.target.value,
  //       key: Date.now(),
  //     },
  //   });
  // }
  // addAnswer(e) {
  //   e.preventDefault();
  //   const answers = this.state.answers;
  //   const newAnswer = this.state.currentAnswer;
  //   const text = this.state.currentAnswer.value.length;
  //   if (newAnswer.value !== "" && answers.length < 10) {
  //     const newAnswers = [...this.state.answers, newAnswer];
  //     this.setState({
  //       answers: newAnswers,
  //       counter: this.state.counter + 1,
  //       currentAnswer: {
  //         value: "",
  //         key: "",
  //       },
  //     });
  //   }
  //   this.disableFields(text);
  // }

  // deleteAnswer(key) {
  //   const filteredAnswers = this.state.answers.filter(
  //     (item) => item.key !== key
  //   );
  //   this.setState({
  //     answers: filteredAnswers,
  //     counter: this.state.counter - 1,
  //   });
  // }

  // setUpdate(value, key) {
  //   const answers = this.state.answers;
  //   answers.map((item) => {
  //     if (item.key === key) {
  //       item.value = value;
  //       this.disableFields(item.value.length);
  //     }
  //     return null;
  //   });

  //   this.setState({
  //     answers: answers,
  //   });
  // }
  // reset() {
  //   this.setState({
  //     question: {
  //       value: "",
  //     },
  //     answers: [],
  //     counter: 0,
  //     disabled: false,
  //     currentAnswer: {
  //       value: "",
  //       key: "",
  //     },
  //   });
  // }
  // disableFields(value) {
  //   if (value >= 81) {
  //     document.getElementById("add-answer-field").disabled = true;
  //     this.setState({
  //       disabled: true,
  //     });
  //   } else {
  //     document.getElementById("add-answer-field").disabled = false;
  //     this.setState({
  //       disabled: false,
  //     });
  //   }
  // }
  render() {
    let Alert;
    let AlertDisabled;
    if (this.props.counter === 10) {
      Alert = (
        <div className="alert alert-danger" role="alert">
          You can't add more answers
        </div>
      );
    } else if (this.props.counter < 2) {
      Alert = (
        <div className="alert alert-warning" role="alert">
          Add at least 2 answers
        </div>
      );
    } else {
      Alert = null;
    }
    if (
      this.props.disabled === true ||
      this.props.question.value.length >= 81
    ) {
      AlertDisabled = (
        <div className="alert alert-danger" role="alert">
          You can add max 80 characters
        </div>
      );
    } else {
      AlertDisabled = null;
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
            {AlertDisabled}
            {Alert}
            <div className="possible-answers d-flex justify-content-between align-items-end">
              <p className="m-0">{this.props.counter}/10 possible answers</p>
              <button
                className="btn btn-outline-secondary bg-danger text-white text-center pr-4 pl-4"
                type="button"
                value="reset"
                onClick={this.props.reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
