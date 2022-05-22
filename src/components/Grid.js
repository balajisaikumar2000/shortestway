import React, { useState } from 'react'
import './Grid.css'

function Grid(props) {
    // const [grid, setGrid] = useState(() => new Array(10).fill('').map(() => new Array(15).fill(' '))); 
    const grid = new Array(15).fill('').map(() => new Array(30).fill(' '));
    const [start ,setStart] = useState(false);
    const [end,setEnd] = useState(false); 
    function handleClick(event) {
        const cellId = event.target.id;
        const [rowId, colId] = cellId.split('-').map(Number);
        if (props.selectedOption === 'S'){
            setStart(prev => !prev)
            if (start){
                grid[rowId][colId] = 'S';
            }
            else{
                grid[rowId][colId] = ' ';
            }
        }else if(props.selectedOption === 'E'){
            setEnd(prev => !prev)
            if (end){
                grid[rowId][colId] = 'E';
            }
            else{
                grid[rowId][colId] = ' ';
            }
        }else{
            if(props.selectedOption === grid[rowId][colId]){
                grid[rowId][colId] = ' ';
            }else{
                grid[rowId][colId] = props.selectedOption;
            }
        }
        // setGrid((prevGrid) => {
        //     prevGrid[rowId][colId] = props.selectedOption;
        //     return [...prevGrid]
        // })
    }
    return (
        <div id="rows_parent">
            {
                grid.map((row, rowId) => {
                    return <div className="row" id={"row_" + rowId} key={rowId}>
                        {
                            row.map((cell, cellId) => {
                                return <Cell selectedOption={props.selectedOption} start={start} end={end} rowId={rowId} cellId={cellId} key={cellId} onClick={handleClick}></Cell>
                            }
                            )
                        }
                    </div>
                })
            }
        </div>
    )
}

function Cell(props) {
    const [cell, cellState] = useState(() => props.selectedOption) // # passing arg as function makes it run only on first time
    function handleClick(event) {
        let invalidState = false;
        cellState((prev) => {
            if (props.selectedOption === prev) {
                return ' ';
            }else if( (props.selectedOption === 'S' && props.start) || (props.selectedOption === 'E' && props.end)){
                invalidState = true;
                alert('You can choose only cell as Start or End')
                return ' ';
            }
            return props.selectedOption;
        });
        if( !invalidState ) props.onClick(event);
    }
    return (
        <div className={`cell ${cell}`} onClick={handleClick} id={`${props.rowId}-${props.cellId}`} ><p>{`${props.rowId}-${props.cellId}`}</p></div>
    )
}

export default Grid;

