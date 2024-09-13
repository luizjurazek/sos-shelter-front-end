import React, { useState } from "react";
import Style from "../../css/LoginForm.module.css";
import logoGoogle from "../../assets/img/logoGoogle.svg";
import FuncDoLogin from "../login/FuncDologin"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function setInputs(e, setInput) {
    setInput(e.target.value);
  }

  return (
    <>
      <section className={Style.container}>
        <div className={Style.textSection}>
          <h2>Welcome back</h2>
          <p>Welcome back! Please enter your details</p>
        </div>

        <section className={Style.FormSection}>
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            onChange={(e) => {
              setInputs(e, setEmail);
            }}
          />
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => {
              setInputs(e, setPassword);
            }}
          />
          <a className={Style.forgotPasswordLink} href="/">Forgot password</a>
        </section>

        <div className={Style.btnSection}>
          <button className={Style.btnLogin} onClick={''}>Login</button>
          <button className={Style.btnLoginGoogle}>
            <img src={logoGoogle} alt="Logo do google" width={20} />
            Login with Google
          </button>
          <p>
            Don't have an account? <a href="/">Sign up for free</a>
          </p>
        </div>
      </section>
    </>
  );
}
