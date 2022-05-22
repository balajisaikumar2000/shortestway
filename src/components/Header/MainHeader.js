import React from 'react'
import Options from './Options'

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
    </header>
  )
}

export default MainHeader;