import React from "react";
import "../styles/Vote.css";

const Vote = () => {
  return (
    <div className="vote-box d-flex flex-column justify-content-between">
      <div>
        <h2>Vote</h2>
      </div>
      <div className="vote-context d-flex flex-column justify-content-between mt-4">
        <div>
          <div className="mb-4">
            <h5>Question?</h5>
          </div>
          <div className="mt-4 pt-3">
            <div className="answer-box form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="answer-box form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="answer-box form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="answer-box form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="answer-box form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="answer-box form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="answer-box form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="answer-box form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="answer-box form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="answer-box form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div>

            
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline-secondary bg-info text-white align-self-end text-center pr-5 pl-5"
        type="button"
      >
        Vote
      </button>
    </div>
  );
};

export default Vote;
