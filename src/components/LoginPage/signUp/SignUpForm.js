import React, { useState } from "react";
import Style from "../signUp/SignUpForm.module.css";
import logoGoogle from "../../../assets/img/logoGoogle.svg";
import InputMask from "react-input-mask";
import PostData from "./PostData";
import ModalResponse from "../ModalResponse/ModalResponse";

export default function SignUp({ setToggleForm }) {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [birthday, setBirthday] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const [response, setResponse] = useState({ error: false, errors: [], message: "" });

  function setInputs(e, setInput) {
    setInput(e.target.value);
  }

  async function signSubmitedButton() {
    const data = {
      name,
      lastname,
      birthday,
      email,
      phonenumber,
      password,
      confirmPassword,
    };

    try {
      const res = await PostData(data);
      setResponse(res);
    } catch (error) {
      console.error("Error during login", error);
    } finally {
      setIsOpen(true);
    }
  }

  return (
    <>
      <section
        className={Style.container}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ModalResponse isOpen={isOpen} isError={response.error} errors={response.errors} message={response.message} />
        <div className={Style.textSection}>
          <h2>Welcome</h2>
          <p>Welcome! Please enter your details</p>
        </div>

        {/* Form */}
        <section className={Style.FormSection}>
          <label for="name">Name</label>
          <input type="text" placeholder="Enter your name" id="name" onChange={(e) => setInputs(e, setName)} />
          <label for="Lastname">Lastname</label>
          <input type="text" placeholder="Enter your lastname" id="lastanme" onChange={(e) => setInputs(e, setLastname)} />
          <label for="name">Birthday</label>
          <input type="date" placeholder="Enter your birthday" id="birthday" onChange={(e) => setInputs(e, setBirthday)} />
          <label for="email">Email</label>
          <input type="email" placeholder="Enter your email" id="email" onChange={(e) => setInputs(e, setEmail)} />
          <InputMask mask="(99)99999-9999" value={phonenumber} onChange={(e) => setInputs(e, setPhonenumber)} placeholder="(xx)xxxxx-xxxx">
            {(inputProps) => <input {...inputProps} type="text" id="phonenumber" />}
          </InputMask>
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" onChange={(e) => setInputs(e, setPassword)} />
          <label for="confirmPassword">Repeat your password</label>
          <input type="password" placeholder="Confirm your password" id="confirmPassword" onChange={(e) => setInputs(e, setconfirmPassword)} />
        </section>

        {/* Botoes de login e sign */}
        <div className={Style.btnSection}>
          <button className={Style.btnsignUp} onClick={signSubmitedButton}>
            Sign In
          </button>
          <button className={Style.btnsignUpGoogle}>
            <img src={logoGoogle} alt="Logo do google" width={20} />
            Sign in With Google
          </button>
          <p>
            Already have an account? <span onClick={() => setToggleForm(true)}>Login</span>
          </p>
        </div>
      </section>
    </>
  );
}
