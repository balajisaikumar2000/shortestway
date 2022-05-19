import React from 'react'
import Cell from './Cell'

import classes from './GridRow.module.css'

function GridRow(props) {

    function handleClick(event){
        props.onClick(event)
    }
    
    function createCells(item,index) {
        return <Cell key={props.row*32+index} id={props.row*32+index} onClick={handleClick}></Cell>
    }

    return (
        <div className={classes['gridRow']}>
            { 
                props.grid.map(createCells)
            }
        </div>
    )
}

export default GridRow