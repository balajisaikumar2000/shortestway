import React from 'react'
import classes from './Cell.module.css';

function Cell(props) {
  return (
    <div className={classes['cell']} id={props.id} onClick={props.onClick} ></div>
  )
}

export default Cell