import React from 'react';
import './style.css'

function InputRadius(props){
    return(
        <div className="InputRadius">
           <input type='radio' name={props.name} value={props.value}/>
           <label>{props.label}</label>
        </div>
    );
}

export default InputRadius;