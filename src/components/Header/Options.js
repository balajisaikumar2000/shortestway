import React from 'react'
import classes from './Options.module.css'


function Options(props) {
    function createOption(item,index){
        return (
        <span key={index} className={classes["radio-option"]}>
<<<<<<< HEAD
            <input type="radio" id={item.id} name={props.name} value={item.value} />
            <label htmlFor={item.id}>{item.id}</label>
        </span>)
    }
=======
            <input type="radio" id={item.id} name={props.name} value={item.value} onChange={props.onChange}/>
            <label htmlFor={item.id}>{item.id}</label>
        </span>)
    }

>>>>>>> krishna/test
    return (
    <div className= { classes["radio-toolbar"] } > 
        { props.options.map(createOption) }
    </div>
  )
}

export default Options