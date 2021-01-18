import React from 'react';

import './style.css';

export default function BlackButton(props){
    return(
        <button className="black-button" type={props.type} onClick={props.onClick}>{props.name}</button>
        
    );
}