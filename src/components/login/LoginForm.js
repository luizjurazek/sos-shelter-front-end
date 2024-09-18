import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Style from "../login/LoginForm.module.css";
import logoGoogle from "../../assets/img/logoGoogle.svg";
import PostData from "./PostData";
import SimpleModal from "../Modal/SimpleModal";
import successIcon from "../../assets/img/successIcon.svg";
import failureIcon from "../../assets/img/failureIcon.svg";
import setItemLocalStorage from "../../utils/setItemLocalStorage";

export default function LoginForm({ setToggleForm }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function setInputs(e, setInput) {
    setInput(e.target.value);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  async function HandleLogin() {
    try {
      const res = await PostData(email, password);
      setResponse(res);
      setModalIsOpen(true);
      if (res.error === false) {
        setItemLocalStorage("id_user", res.id_user);
        setItemLocalStorage("email_user", res.email);
        setItemLocalStorage("token_user", res.token);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  }

  return (
    <>
      {modalIsOpen && <SimpleModal img={response.error ? failureIcon : successIcon} text={response.message} onClose={closeModal} />}
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
          <a className={Style.forgotPasswordLink} href="/">
            Forgot password
          </a>
        </section>

        <div className={Style.btnSection}>
          <button className={Style.btnLogin} onClick={HandleLogin}>
            Login
          </button>
          <button className={Style.btnLoginGoogle}>
            <img src={logoGoogle} alt="Logo do google" width={20} />
            Login with Google
          </button>
          <p>
            Don't have an account? <span onClick={() => setToggleForm(false)}>Sign up for free</span>
          </p>
        </div>
      </section>
    </>
  );
}
