import React from "react";
import "./style.css";

function Input(props) {
  return (
    <div className="Input">
      <label className="lbInput" htmlFor={props.name}>{props.label}</label>
      <br />
      <input
        className={props.className}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        maxLength={props.maxLength}
        minLength={props.minLength}
        onBlur={props.onBlur}
        onKeyUp={props.onKeyUp}
        onKeyPress={props.onKeyPress}
        autoComplete={props.autoComplete}
      />
    </div>
  );
}

export default Input;
