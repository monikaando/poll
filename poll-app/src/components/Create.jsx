import React, { Component } from "react";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Create</h2>
        </div>
        <form>
          <input
            type="text"
            value={this.state.value}
            placeholder="Question"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
