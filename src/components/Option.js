import React from 'react';

const Option = props => (
  <div className="option">
    <p className="option__option">
      {props.count}. {props.option}
    </p>
    <button
      className="button button--link"
      onClick={() => props.handleDeleteOption(props.option)}
    >
      Remove
    </button>
  </div>
);

export default Option;
