import React from "react";
import Create from "./components/Create";
import Vote from "./components/Vote";
import Results from "./components/Results";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
        value: "",
      },
      answers: [],
      pickedAnswerId: 0,
      counter: 0,
      disabled: false,
      currentAnswer: {
        value: "",
        key: "",
        votes: 0,
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.reset = this.reset.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.disableFields = this.disableFields.bind(this);
    this.disableFields80chars = this.disableFields80chars.bind(this);
    this.radioOnChange = this.radioOnChange.bind(this);
    this.onVoteClick = this.onVoteClick.bind(this);
    this.disableVoteButton = this.disableVoteButton.bind(this);
  }
  componentDidMount(prevState) {
    console.log(prevState, this.state);
    const questionText = this.state.question.value.length;
    this.disableFields(questionText < 1);
    this.disableVoteButton()
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
    console.log(this.state.pickedAnswerId);
  }
  updateQuestion(e) {
    const questionText = this.state.question.value.length;
    this.setState({
      question: {
        value: e.target.value,
      },
    });
    this.disableFields80chars(questionText >= 81);
    this.disableFields(questionText < 2);
    this.disableVoteButton();
  }
  handleInput(e) {
    this.setState({
      currentAnswer: {
        value: e.target.value,
        key: Date.now(),
        votes: 0,
      },
    });
  }
  addAnswer(e) {
    e.preventDefault();
    const answers = this.state.answers;
    const newAnswer = this.state.currentAnswer;
    const text = this.state.currentAnswer.value.length;
    if (
      newAnswer.value !== "" &&
      newAnswer.value.trim().length !== 0 &&
      answers.length < 10
    ) {
      const newAnswers = [...this.state.answers, newAnswer];
      this.setState({
        answers: newAnswers,
        counter: this.state.counter + 1,
        currentAnswer: {
          value: "",
          key: "",
          votes: 0,
        },
      });
    }
    this.disableFields80chars(text >= 81);
    this.disableVoteButton();
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
        this.disableFields80chars(item.value.length >= 81);
      }
      return null;
    });

    this.setState({
      answers: answers,
    });
  }
  reset() {
    this.setState({
      question: {
        value: "",
      },
      answers: [],
      counter: 0,
      disabled: false,
      currentAnswer: {
        value: "",
        key: "",
        votes: 0,
      },
    });
  }
  disableFields(conditional) {
    if (conditional) {
      document.getElementById("add-answer-field").disabled = true;
    } else {
      document.getElementById("add-answer-field").disabled = false;
    }
  }
  disableFields80chars(conditional) {
    if (conditional) {
      document.getElementById("add-answer-field").disabled = true;
      this.setState({
        disabled: true,
      });
    } else {
      document.getElementById("add-answer-field").disabled = false;
      this.setState({
        disabled: false,
      });
    }
  }

  radioOnChange(e) {
    this.setState({
      pickedAnswerId: parseInt(e.target.id),
    });
  }
  disableVoteButton(){
    if(this.state.answers.length < 1){
      document.getElementById("btnVote").disabled = true
    }
    else {
      document.getElementById("btnVote").disabled = false
    }
  }
  onVoteClick() {
    const answers = this.state.answers;
    const id = this.state.pickedAnswerId;
    answers.map((item) => {
      if(item.key === id) {
        item.votes += 1;
      }
      return null
    })
    this.setState({
          answers: answers,
        });
  }

  render() {
    return (
      <div className="app d-flex flex-column justify-content-between">
        <div className="d-flex pb-3 mt-3 mb-1 ml-5 mr-5 flex-row justify-content-between">
          <Create
            question={this.state.question}
            updateQuestion={this.updateQuestion}
            answers={this.state.answers}
            counter={this.state.counter}
            addAnswer={this.addAnswer}
            currentAnswer={this.state.currentAnswer}
            handleInput={this.handleInput}
            deleteAnswer={this.deleteAnswer}
            setUpdate={this.setUpdate}
            disabled={this.state.disabled}
            reset={this.reset}
          />
          <Vote
            question={this.state.question}
            answers={this.state.answers}
            radioOnChange={this.radioOnChange}
            onVoteClick={this.onVoteClick}
          />
          <Results votes={this.state.currentAnswer.votes} />
        </div>
        <div className="mt-5 pt-5">
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
