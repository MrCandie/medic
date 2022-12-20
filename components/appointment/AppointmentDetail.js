import React, { Fragment, useEffect, useState } from "react";
import { getAppointment } from "../../lib/http";
import classes from "./appointment.module.css";
import Spinner from "../ui/spinner/spinner";
import { GoLocation } from "react-icons/go";

export default function AppointmentDetail({ id }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await getAppointment();
        setData(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getData();
  }, []);

  function deleteHandler() {}

  const appointmentData = data.find((item) => item.id === id);
  if (!appointmentData) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <section className={classes.detail}>
        <h1>{appointmentData.name}</h1>
        <hr />
        <div className={classes.duration}>
          <p>{appointmentData.date}</p>
          <time>{appointmentData.time}</time>
        </div>
        <hr />
        <address>
          <GoLocation />
          {appointmentData.address}
        </address>
        <hr />
        <div className={classes.reason}>
          <p>{appointmentData.reason}</p>
          <hr />
          <p>{appointmentData.note}</p>
          <hr />
        </div>
        <div className={classes.action}>
          <button className={classes.edit}>Edit details</button>
          <button onClick={deleteHandler} className={classes.remove}>
            Remove
          </button>
        </div>
      </section>
      {loading && <Spinner />}
    </Fragment>
  );
}
