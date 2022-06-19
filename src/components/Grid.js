import React, { useState, useRef , useEffect } from "react";
import MainHeader from "./Header/MainHeader";
import ErrorModal from "./UI/Backdrop";
import getPath from "./BFS"
import "./Grid.css";

function Gridlayout(props) {
  const [selectedOption, setSelectedOption] = useState(" "); // specifies the selected option ie. (start , end , wall , clear) passed as a prop to Grid component
  const [find, setFind] = useState(false); // specifies whether to find path or not (true/false) passed as a prop to Grid component

  // onChange function listens for changes in the selected option passed as a props to MainHeader component.
  function onChange(event) {
    const val = event.target.value;
    setSelectedOption((prev) => val);
  }
  // val becomes true when search button is clicked (passed as a prop to MainHeader) and becomes false when grid is updated (passed as a prop to grid). 
  function setPathFind(val){
    setFind((prev) => val);
  }
  return (
    <div id="main-grid">
      <MainHeader onChange={onChange} setPathFind={setPathFind} />
      <Grid gridSize={props.gridSize} selectedOption={selectedOption} find={find} setPathFind={setPathFind}></Grid>
    </div>
  );
}

function Grid(props) {
  const grid = useRef(new Array(Number(props.gridSize)).fill(" ").map(() => new Array(Number(props.gridSize)).fill(" ")));
  const [start, setStart] = useState({ isExist: false, rowId: null, colId: null }); // start point in the grid
  const [end, setEnd] = useState({ isExist: false, rowId: null, colId: null }); // end point in the grid
  const [path,setPath] = useState(new Set()); // shortest path between the start and end (if porps.find is true it get the path else it is a empty set). 
  const [error,setError] = useState(false); // If there is no start or end point and search button is clicked then it becomes true and error is popped up.
  
  // if props.find == true call bfs and stores the output in the path else sets the path to empty set
  useEffect(()=>{
    if(props.find){
      if(!start.isExist || !end.isExist){
        setError((prev) => true)
        return;
      }
      setPath((prev)=>getPath(JSON.parse(JSON.stringify(grid.current)),[start.rowId,start.colId],[end.rowId,end.colId]));
    }else{
      setPath((prev)=> new Set());
    }
  },[props.find]);

  // Error Confirm
  function onConfirm() {
    setError(false);
  }

  // grid updateLogic
  function updateGrid(event) {
    const cellId = event.target.id;
    const [rowId, colId] = cellId.split("-").map(Number);
    if(props.find){
      props.setPathFind(false);
    }
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
      {error && (<ErrorModal onConfirm={onConfirm} title="Error" message="Missing Start or End Points" />)}
      {grid.current.map((row, rowId) => {
        return (
          <div className="row" id={"row_" + rowId} key={rowId}>
            {row.map((cell, cellId) => {
              return (
                <Cell selectedOption={props.selectedOption} start={start["isExist"]} end={end["isExist"]} rowId={rowId}
                  cellId={cellId} key={cellId} updateGrid={updateGrid} path={path}/>
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

  // Error confirm
  function onConfirm() {
    setError(false);
  }

  // updates the cell state and if it is a valid update then update is passed to grid by props.updateGrid
  function updateCell(event) {
    let invalidState = false;
    setCellState((prev) => {
      if (props.selectedOption === prev) {
        return " ";
      } else if ((props.selectedOption === "S" && props.start) || (props.selectedOption === "E" && props.end)) {
        invalidState = true;
        setError((prev) => true); // setting up the error
        return prev;
      }
      return props.selectedOption;
    });
    if (!invalidState) props.updateGrid(event);
  }

  return (
    <>
      {error && (<ErrorModal onConfirm={onConfirm} title="Error" message="You can choose only one cell as Start or End" />)} 
      <div className={`cell ${(props.path.has(props.rowId+"-"+props.cellId))?'Y':cell}`} onClick={updateCell} id={`${props.rowId}-${props.cellId}`}>
        <p>{`${props.rowId}-${props.cellId}`}</p>
      </div>
    </>
  );
}

export default Gridlayout;
