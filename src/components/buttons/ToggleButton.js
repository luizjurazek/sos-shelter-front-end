import React from "react";
import Style from "../buttons/ToggleButton.module.css";

export default function ToggleButton(props) {
  const handleToggle = () => {
    props.setToggleForm(!props.toggleForm);
  };

  return (
    <div className={`${Style.container} ${props.toggleForm ? Style.flexStart : Style.flexEnd}`} onClick={handleToggle}>
      <button className={Style.toggleButton}>{props.toggleForm ? props.textTrue : props.textFalse}</button>
    </div>
  );
}
