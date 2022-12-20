import React, { Fragment, useContext, useRef, useState } from "react";
import { useRouter } from "next/router";
import { editAppointment, postAppointment } from "../../lib/http";
import classes from "../appointment/appointment.module.css";
import Spinner from "../ui/spinner/spinner";
import Notification from "../ui/notification/Notification";
import { AuthContext } from "../../lib/AuthContext";

export default function EditAppointment({ data, setShowUpdate, id }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [showNotification, setShowNotification] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const [name, setName] = useState(data.name);
  const [reason, setreason] = useState(data.reason);
  const [address, setaddress] = useState(data.address);
  const [date, setdate] = useState(data.date);
  const [time, settime] = useState(data.time);
  const [note, setnote] = useState(data.note);

  function isValid(value) {
    return value.trim().length !== 0;
  }

  let formIsValid;

  async function updateHandler(e) {
    e.preventDefault();
    const uid = localStorage.getItem("uid");

    const nameIsValid = isValid(name);
    const reasonIsValid = isValid(reason);
    const addressIsValid = isValid(address);
    const dateIsValid = isValid(date);
    const timeIsValid = isValid(time);

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
      name,
      reason,
      address,
      date,
      time,
      note,
      key: uid,
    };
    try {
      setIsLoading(true);
      await editAppointment(id, data);
      setIsLoading(false);
      setText("Appointment updated Successfully");
      setTitle("Success");
      setType("success");
      setShowNotification(true);
      router.replace(`/appointment`);
    } catch (error) {
      setIsLoading(false);
      setText("something went wrong");
      setTitle("Error");
      setType("error");
      setShowNotification(true);
    }
    setShowUpdate(false);
  }

  return (
    <Fragment>
      <div className="overlay"></div>
      <div className="container">
        <h1>edit appointment</h1>
        <form onSubmit={updateHandler} className="form">
          <div className={classes.field}>
            <label htmlFor="name">doctor's name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Dr john doe"
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="name">reason for the visit</label>
            <textarea
              onChange={(e) => setreason(e.target.value)}
              value={reason}
              rows="2"
              type="text"
              placeholder="sore throat and serious headache"
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="name">address (optional)</label>
            <input
              onChange={(e) => setaddress(e.target.value)}
              value={address}
              type="text"
              placeholder="01, sull valley lekki laagos"
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="name">date</label>
            <input
              onChange={(e) => setdate(e.target.value)}
              value={date}
              type="date"
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="name">time</label>
            <input
              onChange={(e) => settime(e.target.value)}
              value={time}
              type="time"
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="name">personal note (optional)</label>
            <textarea
              onChange={(e) => setnote(e.target.value)}
              value={note}
              rows="2"
              type="text"
              placeholder="Ask about anything you are not clear about"
            />
          </div>
          <button>Add Appointment</button>
          {isLoading && <Spinner />}
        </form>
      </div>
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
