import React from 'react'
import Options from './Options'

<<<<<<< HEAD
function MainHeader() {
    const cellFillOptions = [ 
        {id:'Start', value: 's'}, 
        {id:'End' , value:'e'}, 
        {id:'Wall' , value:'w'},
        {id:'Clear' , value:'c'}
    ];

  return (
    <header>
        <Options name='cellFillOptions' options={cellFillOptions} />
=======
function MainHeader(props) {
    const cellFillOptions = [ 
        {id:'Start', value: 'S'}, 
        {id:'End' , value:'E'}, 
        {id:'Wall' , value:'W'},
        {id:'Clear' , value:' '}
    ];

    function onChange(event) {
      props.onChange(event)
    }

  return (
    <header>
        <Options name='cellFillOptions' options={cellFillOptions} onChange={onChange}/>
        <button>Reset</button>
        <button>Find Path</button>
>>>>>>> krishna/test
    </header>
  )
}

export default MainHeader;