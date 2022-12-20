import React, { Fragment, useState } from "react";
import { editMedication } from "../../lib/http";
import classes from "../medication/medication.module.css";
import Notification from "../ui/notification/Notification";
import Spinner from "../ui/spinner/spinner";
import { useRouter } from "next/router";

export default function EditMedication({ setShowUpdate, id, data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();

  const [name, setName] = useState(data.name);
  const [dose, setdose] = useState(data.dose);
  const [value, setvalue] = useState(data.value);
  const [freq, setfreq] = useState(data.frequency);
  const [startDate, setstartDate] = useState(data.startDate);
  const [endDate, setendDate] = useState(data.endDate);
  const [startTime, setstartTime] = useState(data.startTime);
  const [endTime, setendTime] = useState(data.endTime);
  const [note, setnote] = useState(data.note);
  const [instruction, setinstruction] = useState(data.doctorInstruction);
  const [reminder, setreminder] = useState(data.reminder);

  function isValid(value) {
    return value.trim().length !== 0;
  }

  let formIsValid;
  async function updateHandler(e) {
    e.preventDefault();
    const uid = localStorage.getItem("uid");

    const nameIsValid = isValid(name);
    const doseIsValid = isValid(dose);
    const valueIsValid = isValid(value);
    const freqIsValid = isValid(freq);
    const startDateIsValid = isValid(startDate);
    const endDateIsValid = isValid(endDate);
    const startTimeIsValid = isValid(startTime);
    const endTimeIsValid = isValid(endTime);
    const reminderIsValid = isValid(reminder);

    formIsValid =
      nameIsValid &&
      doseIsValid &&
      valueIsValid &&
      freqIsValid &&
      startDateIsValid &&
      endDateIsValid &&
      endTimeIsValid &&
      startTimeIsValid &&
      reminderIsValid;

    if (!formIsValid) {
      setText("Please enter a valid input");
      setTitle("Invalid Inputs");
      setType("error");
      setShowNotification(true);
      return;
    }

    const data = {
      name,
      dose,
      value,
      frequency: freq,
      startDate,
      endDate,
      startTime,
      endTime,
      reminder,
      doctorInstruction: instruction,
      note,
      key: uid,
    };

    try {
      setIsLoading(true);
      await editMedication(id, data);
      setIsLoading(false);
      setText("Medication Updated Successfully");
      setTitle("Success");
      setType("success");
      setShowNotification(true);
      router.replace("/medication");
    } catch (error) {
      setIsLoading(false);
      setText(error.message);
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
        <h1>edit medication</h1>
        <Fragment>
          <form onSubmit={updateHandler} className="form">
            <div className={classes.field}>
              <label htmlFor="name">Medication name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Paracetamol"
              />
            </div>
            <div className={classes.fields}>
              <div className={classes.field}>
                <label htmlFor="name">Strength/Dose</label>
                <input
                  onChange={(e) => setdose(e.target.value)}
                  value={dose}
                  type="text"
                  placeholder="100mg"
                />
              </div>
              <div className={classes.field}>
                <label htmlFor="name">Value/Unit</label>
                <select onChange={(e) => setvalue(e.target.value)}>
                  <option value="mg">mg</option>
                  <option value="g">g</option>
                  <option value="ml">ml</option>
                </select>
              </div>
            </div>

            <div className={classes.field}>
              <label htmlFor="name">Frequency</label>
              <select onChange={(e) => setfreq(e.target.value)}>
                <option value="once daily">once daily</option>
                <option value="twice daily">twice daily</option>
                <option value="thrice daily">thrice daily</option>
                <option value="nocte">nocte</option>
              </select>
            </div>
            <div className={classes.fields}>
              <div className={classes.field}>
                <label htmlFor="name">Start date(dd/mm/yyyy)</label>
                <input
                  onChange={(e) => setstartDate(e.target.value)}
                  value={startDate}
                  type="date"
                />
              </div>
              <div className={classes.field}>
                <label htmlFor="name">End date(dd/mm/yyyy)</label>
                <input
                  onChange={(e) => setendDate(e.target.value)}
                  value={endDate}
                  type="date"
                />
              </div>
            </div>
            <div className={classes.fields}>
              <div className={classes.field}>
                <label htmlFor="name">Start time</label>
                <input
                  onChange={(e) => setstartTime(e.target.value)}
                  value={startTime}
                  type="time"
                />
              </div>
              <div className={classes.field}>
                <label htmlFor="name">End time</label>
                <input
                  onChange={(e) => setendTime(e.target.value)}
                  value={endTime}
                  type="time"
                />
              </div>
            </div>
            <div className={classes.field}>
              <label htmlFor="name">reminder</label>
              <select onChange={(e) => setreminder(e.target.value)}>
                <option value="5 minutes">5 minutes</option>
                <option value="10 minutes">10 minutes</option>
                <option value="15 minutes">15 minutes</option>
              </select>
            </div>
            <div className={classes.field}>
              <label htmlFor="name">doctor's instruction (optional)</label>
              <textarea
                onChange={(e) => setinstruction(e.target.value)}
                value={instruction}
                rows="3"
                type="text"
                placeholder="Use with enough water, and make sure you have eaten."
              />
            </div>
            <div className={classes.field}>
              <label htmlFor="name">personal note (optional)</label>
              <textarea
                onChange={(e) => setnote(e.target.value)}
                value={note}
                rows="3"
                type="text"
                placeholder="Ask about anything you are not clear about"
              />
            </div>
            <button>Update Medication</button>
          </form>
          {showNotification && (
            <Notification
              modal={setShowNotification}
              text={text}
              title={title}
              type={type}
            />
          )}
          {isLoading && <Spinner />}
        </Fragment>
      </div>
    </Fragment>
  );
}
