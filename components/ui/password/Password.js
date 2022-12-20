import React, { Fragment, useContext, useRef, useState } from "react";
import classes from "./password.module.css";
import { AuthContext } from "../../../lib/AuthContext";
import { changePassword } from "../../../lib/auth";
import Spinner from "../spinner/spinner";

export default function Password({ modal }) {
  const passwordRef = useRef();
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  async function changeHandler(e) {
    e.preventDefault();
    const enteredPassword = passwordRef.current.value;

    const data = {
      idToken: auth.token,
      password: enteredPassword,
      returnSecureToken: false,
    };

    try {
      setLoading(true);
      await changePassword(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }

    modal(false);
  }
  return (
    <Fragment>
      <div onClick={() => modal(false)} className="overlay"></div>
      <section className={classes.section}>
        <form onSubmit={changeHandler} className={classes.form}>
          <div className={classes.field}>
            <label>Enter new password</label>
            <input ref={passwordRef} type="password" />
          </div>
          <button>Change</button>
        </form>
      </section>
      {loading && <Spinner />}
    </Fragment>
  );
}
