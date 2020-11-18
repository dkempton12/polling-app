import './Poll.css';
import React from 'react';

const Poll = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div className="poll-input" key={option.itemId}>
        <input type="radio" name="framework" value={option.response} />
        <label>{option.response}</label>
      </div>
    );
  });
  return (
    <div>
      <div className="container">
        <h3 className="heading">
          Which Javascript framework do you prefer in 2020?
        </h3>
        <div>{renderedOptions}</div>
      </div>
    </div>
  );
};

export default Poll;
