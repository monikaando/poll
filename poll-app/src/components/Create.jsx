import React from "react";
import AnswersList from "./AnswersList";


export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        answers:[],
        currentAnswer: {
            value: '',
            key:''
        }  
    };
    this.handleInput = this.handleInput.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }
  handleInput(e) {
    this.setState({
        currentAnswer: {
            value: e.target.value,
            key: Date.now()
        }
        });
  }
  addAnswer(e) {
      e.preventDefault();
      const newAnswer = this.state.currentAnswer
      console.log(newAnswer)
      if(newAnswer !=='') {
          const newAnswers = [...this.state.answers, newAnswer];
          this.setState({
              answers: newAnswers,
              currentAnswer: {
                value: '',
                key:''
            } 
          })
      }
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
            value={this.state.value}
            placeholder="Question"
            onChange={this.handleChange}
          />
          <AnswersList answers={this.state.answers}></AnswersList>
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
    );
  }
}
