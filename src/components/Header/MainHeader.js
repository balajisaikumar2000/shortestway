import React from "react";
import "./MainHeader.css";
import Button from "../UI/Button";
import Options from '../UI/Options'

function MainHeader(props) {
  const cellFillOptions = [ 
    {id:'Start', value: 'S'}, 
    {id:'End' , value:'E'}, 
    {id:'Wall' , value:'W'},
    {id:'Clear' , value:''}
  ];
  function onChange(event) {
    props.selectedOption.current = event.target.value;
  }
  function searchPath() {
    props.setPathFind(true);
  }

  function goToHome() {
    props.goToHome();
  }

  function resetGrid() {
    props.resetGrid();
  }
  
  return (
    <header>
        <Options name='cellFillOptions' options={cellFillOptions} onChange={onChange} />
        <Button onClick={searchPath}>Search Path</Button>
        <Button onClick={goToHome}>Home</Button>
        <Button onClick={resetGrid}>Reset</Button>
    </header>
  );
}

export default MainHeader;
