import "./App.css";
import { useState } from "react";
import Gridlayout from "./components/Grid";

import Home from "./components/Home";

function App() {
  const [gridState, setGridState] = useState({ gridActive: false, value: null });
  const [resetTime, setResetTime] = useState(0);
  function gridSizeHandler(val) {
    setGridState((prev) => {
      return { gridActive: true, value: val };
    });
  }

  function goToHome(){
    setGridState({ gridActive: false, value: null });
  }


  return (
    <>
      {gridState.gridActive ? (
        <Gridlayout gridSize={gridState.value} goToHome={goToHome} key={resetTime} resetGrid={() => {setResetTime((prev) => prev + 1)}}/>
      ) : (
        <Home getGridSize={gridSizeHandler} />
      )}
     
    </>
  );
}

export default App;
