import React, { useState } from "react";
import LoginForm from "../../components/LoginPage/login/LoginForm";
import SignUp from "../../components/LoginPage/signUp/SignUpForm";
import Style from "../loginPage/LoginPage.module.css";
import ToggleButton from "../../components/buttons/ToggleButton";
import LogoShelter from "../../components/logo/LogoShelter";

export default function LoginPage() {
  const [toggleForm, setToggleForm] = useState(true);

  return (
    <>
      <section className={Style.container}>
        <LogoShelter />
        <ToggleButton toggleForm={toggleForm} setToggleForm={setToggleForm} textTrue="Login" textFalse="Sign Up" />
        {toggleForm ? <LoginForm setToggleForm={setToggleForm}/> : <SignUp />}
      </section>
    </>
  );
}
