import React from "react";
import Style from "../logo/LogoShelter.module.css"
import LogoShelterSvg from "../../assets/img/logoShelter.svg"

export default function LogoShelter(props) {
  return (
    <>
      <section className={Style.container}>
        <img src={LogoShelterSvg} alt="" />
        <h1 className={Style.mainTitle}>S.O.S Shelter</h1>
      </section>
    </>
  );
}
