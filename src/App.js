import "./App.css";
import Grid from "./components/Grid";
import MainHeader from "./components/Header/MainHeader";
import GridSelector from "./components/GridSelector";
import { useState } from "react";

function App() {
  const [currentGrid, setCurrentGrid] = useState();
  const [gridActive, setGridActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(" ");
  function onChange(event) {
    const val = event.target.value;
    setSelectedOption((prev) => val);
  }
  function gridChange(event) {
    setGridActive(true);
    const val = event.target.value;
    setCurrentGrid((prev) => Number(val));
  }

  return (
    <>
      <GridSelector gridChange={gridChange} />
      {gridActive ? (
        <div>
          <MainHeader onChange={onChange} />
          <Grid selectedOption={selectedOption} currentGrid={currentGrid} />
        </div>
      ) : (
        console.log("nothing here")
      )}
    </>
  );
}

export default App;
