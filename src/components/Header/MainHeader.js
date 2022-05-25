import React from "react";
import "./MainHeader.css";

function MainHeader(props) {
  function onChange(event) {
    props.onChange(event);
  }

  return (
    <header>
      <div className="radio-toolbar">
        <span className="radio-option">
          <input
            type="radio"
            id="Start"
            name="cellFillOption"
            value="S"
            onChange={onChange}
          />
          <label htmlFor="Start">Start</label>
        </span>
        <span className="radio-option">
          <input
            type="radio"
            id="End"
            name="cellFillOption"
            value="E"
            onChange={onChange}
          />
          <label htmlFor="End">End</label>
        </span>
        <span className="radio-option">
          <input
            type="radio"
            id="Wall"
            name="cellFillOption"
            value="W"
            onChange={onChange}
          />
          <label htmlFor="Wall">Wall</label>
        </span>
        <span className="radio-option">
          <input
            type="radio"
            id="Clear"
            name="cellFillOption"
            value="C"
            onChange={onChange}
          />
          <label htmlFor="Clear">Clear</label>
        </span>
      </div>
    </header>
  );
}

export default MainHeader;
