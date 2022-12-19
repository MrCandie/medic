import React, { useContext, useRef, useState } from "react";
import classes from "./account.module.css";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { register } from "../../lib/auth";
import Spinner from "../ui/spinner/spinner";
import { AuthContext } from "../../lib/AuthContext";
import { useRouter } from "next/router";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const auth = useContext(AuthContext);

  console.log(auth.isLoggedIn);

  async function signupHandler(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredConfirm = confirmRef.current.value;
    const data = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };

    try {
      setIsLoading(true);
      const response = await register(data);
      auth.login(response.idToken);
      router.replace("/introduction");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
    </section>
  );
}
