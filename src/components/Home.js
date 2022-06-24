import React , {useState} from "react";
import ErrorModal from "./UI/Backdrop";
import "./Home.css";

function Home(props) {
  const [error, setError] = useState(() => false);
  function errorConfirm() {
    setError(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.grid32.checked) {
      props.getGridSize(32);
    } else if (event.target.grid64.checked) {
      props.getGridSize(64);
    } else {
      setError(true);
    }
  }

  return (
    <div className="home">
    {error && (<ErrorModal onConfirm={errorConfirm} title="Error" message="Please Select the grid" />)} 
      <form onSubmit={handleSubmit}>
        <h2>Select a grid</h2>
        <div className="radio-toolbar">
          <span className="radio-option">
            <input type="radio" id="grid32" name="grid" value="32" />
            <label htmlFor="grid32">32 X 32</label>
          </span>
          <span className="radio-option">
            <input type="radio" id="grid64" name="grid" value="64" />
            <label htmlFor="grid64">64 X 64</label>
          </span>
        </div>
        <button type="submit" className="submitButton">Display</button>
      </form>
    </div>
  );
}

export default Home;
