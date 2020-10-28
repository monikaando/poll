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
      totalVotes: 0,
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Votes",
            data: [],
            backgroundColor: [
              "rgba(255, 235, 59, 0.6)",
              "rgba(255, 152, 0, 0.6)",
              "rgba(244, 67, 54, 0.6)",
              "rgba(233, 30, 99, 0.6)",
              "rgba(76, 175, 80, 0.6)",
              "rgba(0, 150, 136, 0.6)",
              "rgba(0, 188, 212, 0.6)",
              "rgba(3, 169, 244, 0.6)",
              "rgba(156, 39, 176, 0.6)",
              "rgba(63, 81, 181, 0.6)",
              "rgba(0, 37, 127, 0.6)",
            ],
          },
        ],
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
    this.createChart = this.createChart.bind(this);
  }
  componentDidMount() {
    const questionText = this.state.question.value.length;
    this.disableFields(questionText < 1);
    this.disableVoteButton();
    this.createChart();
  }
  componentDidUpdate() {
    this.disableVoteButton();
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
    this.createChart();
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
    this.createChart();
  }
  deleteAnswer(key) {
    const filteredAnswers = this.state.answers.filter(
      (item) => item.key !== key
    );
    this.setState({
      answers: filteredAnswers,
      counter: this.state.counter - 1,
    });
    this.createChart();
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
    this.createChart();
  }
  reset() {
    this.setState({
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
      totalVotes: 0,
      chartData: {
        labels: [],
        datasets: [
          {
            data: [],
          },
        ],
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
    this.createChart();
  }
  disableVoteButton() {
    if (this.state.answers.length < 1 || this.state.pickedAnswerId === 0) {
      document.getElementById("btnVote").disabled = true;
    } else {
      document.getElementById("btnVote").disabled = false;
    }
  }
  onVoteClick() {
    const answers = this.state.answers;
    const id = this.state.pickedAnswerId;
    answers.map((item) => {
      if (item.key === id) {
        item.votes += 1;
      }
      return null;
    });
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      answers: answers,
    });
    this.createChart();
  }
  createChart() {
    const answers = this.state.answers;
    if (this.state.answers.length > 0) {
      const answersLabels = answers.map((x) => x.value);
      const answersVotes = answers.map((x) => x.votes);
      this.setState({
        chartData: {
          labels: answersLabels,
          datasets: [
            {
              label: "Votes",
              data: answersVotes,
            },
          ],
        },
      });
    }
  }

  render() {
    return (
      <div className="app d-flex flex-column justify-content-between">
        <div className="d-flex d-md-flex pb-3 mt-3 mb-1 ml-3 mr-2 ml-md-5 mr-md-5 flex-column flex-md-row">
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
          <Results
            votes={this.state.totalVotes}
            chartData={this.state.chartData}
            question={this.state.question}
          />
        </div>
        <div className="mt-5 pt-5">
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
