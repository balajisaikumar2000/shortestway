import React, { useEffect, useState, useRef } from "react";
// import "./Grid.css";

function Grid(props) {
  const [grid, setGrid] = useState(
    new Array(props.currentGrid)
      .fill("")
      .map(() => new Array(props.currentGrid).fill(" "))
  );
  let cnt = useRef(0);
  useEffect(() => {
    cnt.current = cnt.current + 1;
    console.log(cnt);
  });
  // const grid = new Array(props.currentGrid)
  //   .fill("")
  //   .map(() => new Array(props.currentGrid).fill(" "));
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  function handleClick(event) {
    const cellId = event.target.id;
    const [rowId, colId] = cellId.split("-").map(Number);
    if (props.selectedOption === "S") {
      setStart((prev) => !prev);
      if (start) {
        setGrid((prev) => {
          prev[rowId][colId] = "S";
          return [...prev];
        });
      } else {
        setGrid((prev) => {
          prev[rowId][colId] = " ";
          return [...prev];
        });
      }
    } else if (props.selectedOption === "E") {
      setEnd((prev) => !prev);
      if (end) {
        setGrid((prev) => {
          prev[rowId][colId] = "E";
          return [...prev];
        });
      } else {
        setGrid((prev) => {
          prev[rowId][colId] = " ";
          return [...prev];
        });
      }
    } else {
      if (props.selectedOption === grid[rowId][colId]) {
        setGrid((prev) => {
          prev[rowId][colId] = " ";
          return [...prev];
        });
      } else {
        setGrid((prev) => {
          prev[rowId][colId] = props.selectedOption;
          return [...prev];
        });
      }
    }
    // setGrid((prevGrid) => {
    //     prevGrid[rowId][colId] = props.selectedOption;
    //     return [...prevGrid]
    // })
  }
  useEffect(() => {
    setGrid(
      new Array(props.currentGrid)
        .fill("")
        .map(() => new Array(props.currentGrid).fill(" "))
    );
  }, [props.currentGrid]);

  return (
    <div id="rows_parent">
      {grid.map((row, rowId) => {
        return (
          <div className="row" id={"row_" + rowId} key={rowId}>
            {row.map((cell, cellId) => {
              return (
                <Cell
                  selectedOption={props.selectedOption}
                  start={start}
                  end={end}
                  rowId={rowId}
                  cellId={cellId}
                  key={cellId}
                  onClick={handleClick}
                ></Cell>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function Cell(props) {
  const [cell, cellState] = useState(() => props.selectedOption); // # passing arg as function makes it run only on first time
  function handleClick(event) {
    let invalidState = false;
    cellState((prev) => {
      if (props.selectedOption === prev) {
        return " ";
      } else if (
        (props.selectedOption === "S" && props.start) ||
        (props.selectedOption === "E" && props.end)
      ) {
        invalidState = true;
        alert("You can choose only cell as Start or End");
        return " ";
      }
      return props.selectedOption;
    });
    if (!invalidState) props.onClick(event);
  }
  return (
    <div
      className={`cell ${cell}`}
      onClick={handleClick}
      id={`${props.rowId}-${props.cellId}`}
    >
      <p>{`${props.rowId}-${props.cellId}`}</p>
    </div>
  );
}

export default Grid;
