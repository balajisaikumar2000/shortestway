import "./App.css";
import { useState } from "react";
import Gridlayout from "./components/Grid";

import Home from "./components/Home";

function App() {
  const [gridState, setGridState] = useState({
    gridActive: false,
    value: null,
  });

  function gridSizeHandler(val) {
    setGridState((prev) => {
      return {
        gridActive: true,
        value: val,
      };
    });
  }

  return (
    <>
      {gridState.gridActive ? (
        <Gridlayout gridSize={gridState.value} />
      ) : (
        <Home getGridSize={gridSizeHandler} />
      )}
    </>
  );
}

export default App;
