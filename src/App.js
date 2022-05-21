import './App.css';
import Grid from './components/Grid'
import MainHeader from './components/Header/MainHeader'
import {useState} from 'react'

function App() {
  const [selectedOption, setSelectedOption] = useState(' ');
  function onChange(event){
    const val = event.target.value;
    setSelectedOption((prev) => val)
  }
  return (
    <>
      <MainHeader onChange={onChange} />
      <Grid selectedOption={selectedOption} /> 
    </>
  );
}

export default App;
