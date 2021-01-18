import React from 'react';

import './style.css'

export default function BlueButton(props){
    return(
        <button className="blue-button" type={props.type}>{props.name}</button>
    );
}