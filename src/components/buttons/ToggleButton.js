import React from "react";
import Style from "../buttons/ToggleButton.module.css";

export default function ToggleButton({ toggleForm, setToggleForm, textTrue, textFalse }) {
  const handleToggle = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <div className={`${Style.container} ${toggleForm ? Style.flexStart : Style.flexEnd}`} onClick={handleToggle}>
      <button className={Style.toggleButton}>{toggleForm ? textTrue : textFalse}</button>
    </div>
  );
}
