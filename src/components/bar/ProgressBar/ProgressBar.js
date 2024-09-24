import React from "react";
import Style from "./ProgressBar.module.css";

export default function ProgressBar({ use, limit, text }) {
  const percent = (use / limit) * 100;
  console.log(percent);
  return (
    <div className={Style.barContainer}>
      <div className={Style.titleBar}>{text}</div>
      <div className={Style.containerBar}>
        <div className={Style.filledBar} style={{ width: `${percent}%` }}></div>
        <div className={Style.textBar}>
          {use}/{limit}
        </div>
      </div>
    </div>
  );
}
