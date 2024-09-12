import React from "react";
import LoginForm from "../../components/login/LoginForm";
import SignIn from "../../components/signIn/SignInForm";

export default function LoginPage(){
  return (
    <>
      <section style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <SignIn/>
      </section>
    </>
  )
}