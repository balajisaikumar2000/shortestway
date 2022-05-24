import "./App.css";
import { useState } from "react";
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
        <h1>Hey i am grid </h1>
      ) : (
        <Home getGridSize={gridSizeHandler} />
      )}
    </>
  );
}

export default App;
