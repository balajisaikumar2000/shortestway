import React from "react";
import "./MainHeader.css";
import Button from "../UI/Button";
import Options from "./Options";

function MainHeader(props) {
  const cellFillOptions = [
    { id: "Start", value: "S" },
    { id: "End", value: "E" },
    { id: "Wall", value: "W" },
    { id: "Clear", value: "" },
  ];
  function onChange(event) {
    props.selectedOption.current = event.target.value;
    console.log(props.selectedOption);
  }
  function searchPath() {
    props.setPathFind(true);
  }

  return (
    <header>
      <Options
        name="cellFillOptions"
        options={cellFillOptions}
        onChange={onChange}
      />
      <span className="extraButtons">
        <Button onClick={searchPath}>Search Path🔎</Button>
        <Button onClick={searchPath}>Home🏠</Button>
        <Button onClick={searchPath}>Reset 🔃</Button>
      </span>
    </header>
  );
}

export default MainHeader;
