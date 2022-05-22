import React from "react";
import Options from "./Header/Options";

function GridSelector(props) {
  const gridSelectOptions = [
    { id: "grid32", value: 32 },
    { id: "grid64", value: 64 },
  ];

  function onChange(event) {
    props.gridChange(event);
  }
  return (
    <header>
      <Options
        name="gridSelectOptions"
        options={gridSelectOptions}
        onChange={onChange}
      />
    </header>
  );
}
export default GridSelector;
