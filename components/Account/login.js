import React, { Fragment, useContext, useRef, useState } from "react";
import classes from "./account.module.css";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Spinner from "../ui/spinner/spinner";
import { login } from "../../lib/auth";
import { AuthContext } from "../../lib/AuthContext";
import { useRouter } from "next/router";
import Password from "../ui/password/Password";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const auth = useContext(AuthContext);
  const router = useRouter();

  async function loginHandler(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const data = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };

    try {
      setIsLoading(true);
      const response = await login(data);
      auth.login(response.idToken);
      router.replace("/");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <Fragment>
      <section className={classes.section}>
        <div className={classes.header}>
          <h1>welcome back</h1>
          <p>kindly provide the required details to create your account</p>
        </div>
        <form onSubmit={loginHandler} className={classes.form}>
          <div className={classes.field}>
            <label>email</label>
            <input ref={emailRef} type="email" placeholder="teste@gmail.com" />
          </div>
          <div className={classes.field}>
            <label>password</label>
            <input ref={passwordRef} type="password" />
            <p onClick={() => setShowModal(true)} className={classes.password}>
              forgot password?
            </p>
          </div>
          <button>log in</button>
        </form>
        <p className={classes.p}>or</p>
        <button className={classes.google}>
          <FcGoogle />
          sign in with google
        </button>
        <p className={classes.log}>
          don't have an account?{" "}
          <Link href="/account/register">create an account</Link>
        </p>
        {isLoading && <Spinner />}
      </section>
      {showModal && <Password modal={setShowModal} />}
    </Fragment>
  );
}
