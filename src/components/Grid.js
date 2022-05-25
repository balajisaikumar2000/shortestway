import React, { useState, useRef } from "react";
import MainHeader from "./Header/MainHeader";
import ErrorModal from "./UI/Backdrop";
import "./Grid.css";

function Gridlayout(props) {
  const [selectedOption, setSelectedOption] = useState(" ");
  function onChange(event) {
    const val = event.target.value;
    setSelectedOption((prev) => val);
  }
  return (
    <div id="main-grid">
      <MainHeader onChange={onChange} />
      <Grid gridSize={props.gridSize} selectedOption={selectedOption}></Grid>
    </div>
  );
}

function Grid(props) {
  const grid = useRef(
    new Array(Number(props.gridSize))
      .fill("")
      .map(() => new Array(Number(props.gridSize)).fill(" "))
  );
  const [start, setStart] = useState({
    isExist: false,
    rowId: null,
    colId: null,
  });
  const [end, setEnd] = useState({ isExist: false, rowId: null, colId: null });
  function handleClick(event) {
    const cellId = event.target.id;
    const [rowId, colId] = cellId.split("-").map(Number);
    if (grid.current[rowId][colId] === props.selectedOption) {
      if (grid.current[rowId][colId] === "S") {
        setStart((prev) => {
          return { isExist: false, rowId: null, colId: null };
        });
      } else if (grid.current[rowId][colId] === "E") {
        setEnd((prev) => {
          return { isExist: false, rowId: null, colId: null };
        });
      }
      grid.current[rowId][colId] = " ";
    } else if (props.selectedOption === "S") {
      if (grid.current[rowId][colId] === "E") {
        setEnd((prev) => {
          return { isExist: false, rowId: null, colId: null };
        });
      }
      setStart((prev) => {
        return { isExist: true, rowId: rowId, colId: colId };
      });
      grid.current[rowId][colId] = "S";
    } else if (props.selectedOption === "E") {
      if (grid.current[rowId][colId] === "S") {
        setStart((prev) => {
          return { isExist: false, rowId: null, colId: null };
        });
      }
      setEnd((prev) => {
        return { isExist: true, rowId: rowId, colId: colId };
      });
      grid.current[rowId][colId] = "E";
    } else if (props.selectedOption === "W") {
      if (grid.current[rowId][colId] === "S") {
        setStart((prev) => {
          return { isExist: false, rowId: null, colId: null };
        });
      } else if (grid.current[rowId][colId] === "E") {
        setEnd((prev) => {
          return { isExist: false, rowId: null, colId: null };
        });
      }
      grid.current[rowId][colId] = "W";
    } else {
      if (grid.current[rowId][colId] === "S") {
        setStart((prev) => {
          return { isExist: false, rowId: null, colId: null };
        });
      } else if (grid.current[rowId][colId] === "E") {
        setEnd((prev) => {
          return { isExist: false, rowId: null, colId: null };
        });
      }
      grid.current[rowId][colId] = " ";
    }
  }
  return (
    <div id="rows_parent">
      {grid.current.map((row, rowId) => {
        return (
          <div className="row" id={"row_" + rowId} key={rowId}>
            {row.map((cell, cellId) => {
              return (
                <Cell
                  selectedOption={props.selectedOption}
                  start={start["isExist"]}
                  end={end["isExist"]}
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
  const [cell, setCellState] = useState(() => " ");
  const [error, setError] = useState(() => false);
  function onConfirm() {
    setError(false);
  }
  function handleClick(event) {
    let invalidState = false;
    setCellState((prev) => {
      if (props.selectedOption === prev) {
        return " ";
      } else if (
        (props.selectedOption === "S" && props.start) ||
        (props.selectedOption === "E" && props.end)
      ) {
        invalidState = true;
        setError((prev) => true);
        // alert('You can choose only one cell as Start or End');
        return prev;
      }
      return props.selectedOption;
    });
    if (!invalidState) props.onClick(event);
  }
  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={onConfirm}
          title="Error"
          message="You can choose only one cell as Start or End"
        />
      )}
      <div
        className={`cell ${cell}`}
        onClick={handleClick}
        id={`${props.rowId}-${props.cellId}`}
      >
        <p>{`${props.rowId}-${props.cellId}`}</p>
      </div>
    </>
  );
}

export default Gridlayout;
