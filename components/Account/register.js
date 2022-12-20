import React, { useContext, useRef, useState } from "react";
import classes from "./account.module.css";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { register } from "../../lib/auth";
import Spinner from "../ui/spinner/spinner";
import { AuthContext } from "../../lib/AuthContext";
import { useRouter } from "next/router";
import Notification from "../ui/notification/Notification";

export default function Register() {
  const [showNotification, setShowNotification] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const auth = useContext(AuthContext);

  function isValid(value) {
    return value.trim().length !== 0;
  }
  function isEmail(value) {
    return value.trim().includes("@");
  }
  function is6char(value) {
    return value.length >= 6;
  }

  function isEqual(val1, val2) {
    return val1 === val2;
  }

  let formIsValid;

  async function signupHandler(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredConfirm = confirmRef.current.value;

    const emailIsValid = isEmail(enteredEmail) && isValid(enteredEmail);
    const passwordIsValid =
      isValid(enteredPassword) && is6char(enteredPassword);
    const confirmPasswordIsValid =
      isValid(enteredConfirm) && isEqual(enteredPassword, enteredConfirm);

    formIsValid = emailIsValid && passwordIsValid && confirmPasswordIsValid;

    if (!formIsValid) {
      setText("Please enter a valid credential and leave no empty fields");
      setTitle("Invalid Credentials");
      setType("error");
      setShowNotification(true);
      return;
    }

    const data = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };

    try {
      setIsLoading(true);
      const response = await register(data);
      console.log(response);
      setText("Sign up successful.");
      setTitle("Success");
      setType("success");
      setShowNotification(true);
      auth.login(response.idToken, response.localId);
      router.replace("/introduction");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setText(error.message);
      setTitle("Sign up failed");
      setType("error");
      setShowNotification(true);
    }
  }

  return (
    <section className={classes.section}>
      <div className={classes.header}>
        <h1>create an account</h1>
        <p>kindly provide the required details to create your account</p>
      </div>
      <form onSubmit={signupHandler} className={classes.form}>
        <div className={classes.field}>
          <label>email</label>
          <input ref={emailRef} type="email" placeholder="teste@gmail.com" />
        </div>
        <div className={classes.field}>
          <label>password</label>
          <input ref={passwordRef} type="password" />
        </div>
        <div className={classes.field}>
          <label>confirm password</label>
          <input ref={confirmRef} type="password" />
        </div>
        <button>create an account</button>
      </form>
      <p className={classes.p}>or</p>
      <button className={classes.google}>
        <FcGoogle />
        sign up with google
      </button>
      <p className={classes.log}>
        already have an account? <Link href="/account/login">login</Link>
      </p>
      {isLoading && <Spinner />}
      {showNotification && (
        <Notification
          modal={setShowNotification}
          text={text}
          title={title}
          type={type}
        />
      )}
    </section>
  );
}
