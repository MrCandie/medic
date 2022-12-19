import React, { Fragment, useRef, useState } from "react";
import { useRouter } from "next/router";
import { postMedication } from "../../lib/http";
import Spinner from "../ui/spinner/spinner";
import classes from "./medication.module.css";

export default function MedicationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [image, setImage] = useState("");
  const nameRef = useRef();
  const doseRef = useRef();
  const valueRef = useRef();
  const imageRef = useRef();
  const frequencyRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();
  const reminderRef = useRef();
  const doctorRef = useRef();
  const noteRef = useRef();

  function imageLoader(e) {
    setImage(e.target.files[0]);
  }

  async function medicationHandler(e) {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredDose = doseRef.current.value;
    const enteredValue = valueRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredFreq = frequencyRef.current.value;
    const enteredStartDate = startDateRef.current.value;
    const enteredEndDate = endDateRef.current.value;
    const enteredStartTime = startTimeRef.current.value;
    const enteredEndTime = endTimeRef.current.value;
    const enteredReminder = reminderRef.current.value;
    const enteredDoctorInstruction = doctorRef.current.value;
    const enteredNote = noteRef.current.value;

    const data = {
      name: enteredName,
      dose: enteredDose,
      value: enteredValue,
      image: URL.createObjectURL(image),
      frequency: enteredFreq,
      startDate: enteredStartDate,
      endDate: enteredEndDate,
      startTime: enteredStartTime,
      endTime: enteredEndTime,
      reminder: enteredReminder,
      doctorInstruction: enteredDoctorInstruction,
      note: enteredNote,
    };
    setIsLoading(true);
    try {
      await postMedication(data);
      setIsLoading(false);
      router.replace("/medication");
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <Fragment>
      <form onSubmit={medicationHandler} className={classes.form}>
        <div className={classes.field}>
          <label htmlFor="name">Medication name</label>
          <input ref={nameRef} type="text" placeholder="Paracetamol" />
        </div>
        <div className={classes.fields}>
          <div className={classes.field}>
            <label htmlFor="name">Strength/Dose</label>
            <input ref={doseRef} type="text" placeholder="100mg" />
          </div>
          <div className={classes.field}>
            <label htmlFor="name">Value/Unit</label>
            <select ref={valueRef}>
              <option value="mg">mg</option>
              <option value="g">g</option>
              <option value="ml">ml</option>
            </select>
          </div>
        </div>
        <div className={classes.field}>
          <label htmlFor="name">Add images</label>
          <input onChange={imageLoader} ref={imageRef} type="file" />
        </div>
        <div className={classes.field}>
          <label htmlFor="name">Frequency</label>
          <select ref={frequencyRef}>
            <option value="once daily">once daily</option>
            <option value="twice daily">twice daily</option>
            <option value="thrice daily">thrice daily</option>
            <option value="nocte">nocte</option>
          </select>
        </div>
        <div className={classes.fields}>
          <div className={classes.field}>
            <label htmlFor="name">Start date(dd/mm/yyyy)</label>
            <input ref={startDateRef} type="date" />
          </div>
          <div className={classes.field}>
            <label htmlFor="name">End date(dd/mm/yyyy)</label>
            <input ref={endDateRef} type="date" />
          </div>
        </div>
        <div className={classes.fields}>
          <div className={classes.field}>
            <label htmlFor="name">Start time</label>
            <input ref={startTimeRef} type="time" />
          </div>
          <div className={classes.field}>
            <label htmlFor="name">End time</label>
            <input ref={endTimeRef} type="time" />
          </div>
        </div>
        <div className={classes.field}>
          <label htmlFor="name">reminder</label>
          <select ref={reminderRef}>
            <option value="5 minutes">5 minutes</option>
            <option value="10 minutes">10 minutes</option>
            <option value="15 minutes">15 minutes</option>
          </select>
        </div>
        <div className={classes.field}>
          <label htmlFor="name">doctor's instruction (optional)</label>
          <textarea
            ref={doctorRef}
            rows="3"
            type="text"
            placeholder="Use with enough water, and make sure you have eaten."
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="name">personal note (optional)</label>
          <textarea
            ref={noteRef}
            rows="3"
            type="text"
            placeholder="Ask about anything you are not clear about"
          />
        </div>
        <button>Add medication</button>
      </form>
      {isLoading && <Spinner />}
    </Fragment>
  );
}
