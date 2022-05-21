import React from 'react'
import Options from './Options'

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
    </header>
  )
}

export default MainHeader;