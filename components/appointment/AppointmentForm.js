import React, { Fragment, useContext, useRef, useState } from "react";
import { useRouter } from "next/router";
import { postAppointment } from "../../lib/http";
import classes from "./appointment.module.css";
import Spinner from "../ui/spinner/spinner";
import Notification from "../ui/notification/Notification";
import { AuthContext } from "../../lib/AuthContext";

export default function AppointmentForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const nameRef = useRef();
  const reasonRef = useRef();
  const addressRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const noteRef = useRef();

  function isValid(value) {
    return value.trim().length !== 0;
  }

  let formIsValid;

  async function appointmentHandler(e) {
    const uid = localStorage.getItem("uid");
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredReason = reasonRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDate = dateRef.current.value;
    const enteredTime = timeRef.current.value;
    const enteredNote = noteRef.current.value;

    const nameIsValid = isValid(enteredName);
    const reasonIsValid = isValid(enteredReason);
    const addressIsValid = isValid(enteredAddress);
    const dateIsValid = isValid(enteredDate);
    const timeIsValid = isValid(enteredTime);

    formIsValid =
      nameIsValid &&
      reasonIsValid &&
      addressIsValid &&
      dateIsValid &&
      timeIsValid;

    if (!formIsValid) {
      setText("Please enter a valid input");
      setTitle("Invalid Inputs");
      setType("error");
      setShowNotification(true);
      return;
    }

    const data = {
      name: enteredName,
      reason: enteredReason,
      address: enteredAddress,
      date: enteredDate,
      time: enteredTime,
      note: enteredNote,
      key: uid,
    };
    setIsLoading(true);
    try {
      await postAppointment(data);
      setIsLoading(false);
      setText("Appointment Added Successfully");
      setTitle("Success");
      setType("success");
      setShowNotification(true);
      router.replace("/appointment");
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <Fragment>
      <form onSubmit={appointmentHandler} className={classes.form}>
        <div className={classes.field}>
          <label htmlFor="name">doctor's name</label>
          <input ref={nameRef} type="text" placeholder="Dr john doe" />
        </div>
        <div className={classes.field}>
          <label htmlFor="name">reason for the visit</label>
          <textarea
            ref={reasonRef}
            rows="2"
            type="text"
            placeholder="sore throat and serious headache"
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="name">address (optional)</label>
          <input
            ref={addressRef}
            type="text"
            placeholder="01, sull valley lekki laagos"
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="name">date</label>
          <input ref={dateRef} type="date" />
        </div>
        <div className={classes.field}>
          <label htmlFor="name">time</label>
          <input ref={timeRef} type="time" />
        </div>
        <div className={classes.field}>
          <label htmlFor="name">personal note (optional)</label>
          <textarea
            ref={noteRef}
            rows="2"
            type="text"
            placeholder="Ask about anything you are not clear about"
          />
        </div>
        <button>Add Appointment</button>
        {isLoading && <Spinner />}
      </form>
      {showNotification && (
        <Notification
          modal={setShowNotification}
          text={text}
          title={title}
          type={type}
        />
      )}
    </Fragment>
  );
}
