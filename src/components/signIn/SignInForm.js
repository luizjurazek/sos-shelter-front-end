import React from "react";
import Style from "../../css/SignInForm.module.css"
import logoGoogle from "../../assets/img/logoGoogle.svg"

export default function SignIn() {
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
          <input type="text" placeholder="Enter your name" id="name" />
          <label for="name">Birthday</label>
          <input type="date" placeholder="Enter your birthday" id="birthday" />
          <label for="email">Email</label>
          <input type="email" placeholder="Enter your email" id="email" />
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
        </section>

        {/* Botoes de login e sign */}
        <div className={Style.btnSection}>
          <button className={Style.btnSignIn}>Sign In</button>
          <button className={Style.btnSignInGoogle}><img src={logoGoogle} alt="Logo do google" width={20}/>Sign in With Google</button>
          <p>
            Already have an account? <a href="/">Login</a>
          </p>
        </div>
      </section>
    </>
  );
}
