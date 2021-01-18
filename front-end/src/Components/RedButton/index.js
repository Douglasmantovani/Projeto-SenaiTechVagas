import React from 'react';

import './style.css'

export default function RedButton(props){
    return(
        <button className="red-button" type={props.type} onClick={props.onClick} >{props.label}</button>
    );
}