import React from 'react'
import GridRow from './GridRow'

function ShowGrid(props) {
  
  function handleClick(event){
    props.onClick(event);
  }

  function createGridRow(item,index) {
    return <GridRow key={index} row={index} grid={item} onClick={handleClick} />
  }

  return (
      <>
        {props.grid.map(createGridRow)}
      </>
  )
}

export default ShowGrid;
