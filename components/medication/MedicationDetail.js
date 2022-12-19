import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { drugData } from "../../data/store";
import classes from "./medication.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";
import { deleteMedication, getMedication } from "../../lib/http";
import Spinner from "../ui/spinner/spinner";

export default function MedicationDetail({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const medications = await getMedication();
        setData(medications);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  const drug = data.find((item) => item.id === id);
  if (!drug) {
    return <Spinner />;
  }

  async function deleteHandler() {
    setIsLoading(true);
    try {
      await deleteMedication(id);
      setIsLoading(false);
    } catch (error) {}
    setIsLoading(false);
    router.replace("/medication");
  }

  return (
    <section className={classes.detail}>
      <div className={classes.img}>
        <span className={classes.names}>{drug.name[0]}</span>
      </div>
      <div className={classes.description}>
        <h1>{drug.name}</h1>
        <p>
          {drug.dose}
          {drug.value}
        </p>
      </div>
      <div className={classes.duration}>
        <div className={classes.time}>
          <h2>
            <span>
              <AiOutlineClockCircle />
            </span>
            time
          </h2>
          <p>
            {drug.startTime} - {drug.endTime}
          </p>
        </div>
        <div className={classes.time}>
          <h2>
            <span>
              <GiAlarmClock />
            </span>
            remainder
          </h2>
          <p>{drug.reminder}</p>
        </div>
      </div>
      <div className={classes.duration}>
        <div className={classes.time}>
          <h2>
            <span>
              <AiOutlineClockCircle />
            </span>
            duration
          </h2>
          <p>
            {drug.startDate} - {drug.endDate}
          </p>
        </div>
      </div>
      <div className={classes.instruction}>
        <h1>doctor's instruction</h1>
        <p>{drug.doctorInstruction}</p>
      </div>
      <div className={classes.note}>
        <h1>personal note</h1>
        <p>{drug.note}</p>
      </div>
      <div className={classes.action}>
        <button className={classes.edit}>Edit details</button>
        <button onClick={deleteHandler} className={classes.remove}>
          Remove
        </button>
      </div>
      {isLoading && <Spinner />}
    </section>
  );
}
