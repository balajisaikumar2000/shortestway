import React from "react";
import "./Home.css";

function Home(props) {
  function handleSubmit(event) {
    event.preventDefault();

    if (event.target.grid32.checked) {
      props.getGridSize(32);
    } else if (event.target.grid64.checked) {
      props.getGridSize(64);
    } else {
      alert("please select a grid option");
    }
  }

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <h2>Select a grid</h2>
        <div className="inputGrid">
          <div className="gridBox">
            <input
              type="radio"
              id="grid32"
              name="grid"
              value="32"
              className="gridSelector"
            />
            <label htmlFor="grid32">32 X 32</label>
          </div>
          <div className="gridBox">
            <input
              type="radio"
              id="grid64"
              name="grid"
              value="64"
              className="gridSelector"
            />
            <label htmlFor="grid64">64 X 64</label>
          </div>
        </div>
        <button type="submit" className="submitButton">
          display grid
        </button>
      </form>
    </div>
  );
}

export default Home;
