import React, { useState } from "react";
import Style from "../../css/SignInForm.module.css";
import logoGoogle from "../../assets/img/logoGoogle.svg";

export default function SignIn() {
  const [name, setName] = useState();
  const [birthday, setBirthday] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();

  function setInputs(e, setInput) {
    setInput(e.target.value);
  }

  function signSubmitedButton() {
    console.log(name);
    console.log(birthday);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  }

  return (
    <>
      <section className={Style.container}>
        <div className={Style.textSection}>
          <h2>Welcome</h2>
          <p>Welcome! Please enter your details</p>
        </div>

        {/* Form */}
        <section className={Style.FormSection}>
          <label for="name">Name</label>
          <input type="text" placeholder="Enter your name" id="name" onChange={(e) => setInputs(e, setName)} />
          <label for="name">Birthday</label>
          <input type="date" placeholder="Enter your birthday" id="birthday" onChange={(e) => setInputs(e, setBirthday)} />
          <label for="email">Email</label>
          <input type="email" placeholder="Enter your email" id="email" onChange={(e) => setInputs(e, setEmail)} />
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" onChange={(e) => setInputs(e, setPassword)} />
          <label for="confirmPassword">Repeat your password</label>
          <input type="password" placeholder="Confirm your password" id="confirmPassword" onChange={(e) => setInputs(e, setconfirmPassword)} />
        </section>

        {/* Botoes de login e sign */}
        <div className={Style.btnSection}>
          <button className={Style.btnSignIn} onClick={signSubmitedButton}>
            Sign In
          </button>
          <button className={Style.btnSignInGoogle}>
            <img src={logoGoogle} alt="Logo do google" width={20} />
            Sign in With Google
          </button>
          <p>
            Already have an account? <a href="/">Login</a>
          </p>
        </div>
      </section>
    </>
  );
}
