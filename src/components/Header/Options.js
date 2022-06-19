import React from "react";
import './Options.css'

function Options(props) {
  function createOption(item, index) {
    return (
      <span key={index} className="radio-option">
        <input type="radio" id={item.id} name={props.name} value={item.value} onChange={props.onChange}/>
        <label htmlFor={item.id}>{item.id}</label>
      </span>
    );
  }

  return (
    <div className="radio-toolbar">
      {props.options.map(createOption)}
    </div>
  );
}

export default Options;
