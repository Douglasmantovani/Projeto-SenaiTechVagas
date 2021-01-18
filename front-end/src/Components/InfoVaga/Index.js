import React from 'react';
import './style.css';

function InfoVaga(props) {
    return (
        <div className="InfoVaga">
            <img src={props.source} />
            <h5>{props.NomeProp}</h5>
        </div>
    );
}
export default InfoVaga;