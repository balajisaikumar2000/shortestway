import React from "react";
import "./MainHeader.css";
import Button from "../UI/Button";

function MainHeader(props) {
  function onChange(event) {
    props.onChange(event);
  }

  function searchPath() {
    props.setPathFind(true);
  }
  return (
    <header>
      <div>
        <span className="radio-toolbar">
          <span className="radio-option">
            <input type="radio" id="Start" name="cellFillOption" value="S" onChange={onChange} />
            <label htmlFor="Start">Start</label>
          </span>
          <span className="radio-option">
            <input type="radio" id="End" name="cellFillOption" value="E" onChange={onChange}/>
            <label htmlFor="End">End</label>
          </span>
          <span className="radio-option">
            <input type="radio" id="Wall" name="cellFillOption" value="W" onChange={onChange}/>
            <label htmlFor="Wall">Wall</label>
          </span>
          <span className="radio-option">
            <input type="radio" id="Clear" name="cellFillOption" value="C" onChange={onChange}/>
            <label htmlFor="Clear">Clear</label>
          </span>
        </span>
        <span>
          <Button onClick={searchPath}>Search Path</Button>
        </span>
      </div>
    </header>
  );
}

export default MainHeader;
