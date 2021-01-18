import React from 'react';
import './style.css';

function Tag(props) {
    return (
        <div className="Tag">
           <h5>{props.NomeTag}</h5>
        </div>
    );
}
export default Tag;