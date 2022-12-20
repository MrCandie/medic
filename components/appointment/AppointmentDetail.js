import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteAppointment, getAppointment } from "../../lib/http";
import classes from "./appointment.module.css";
import Spinner from "../ui/spinner/spinner";
import { GoLocation } from "react-icons/go";
import EditAppointment from "../edit/EditAppointment";

export default function AppointmentDetail({ id }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [showUpdate, setShowUpdate] = useState("");
  const router = useRouter();
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

  async function deleteHandler() {
    try {
      setLoading(true);
      await deleteAppointment(id);
      router.replace("/appointment");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

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
          <button onClick={() => setShowUpdate(true)} className={classes.edit}>
            Edit details
          </button>
          <button onClick={deleteHandler} className={classes.remove}>
            Remove
          </button>
        </div>
      </section>
      {loading && <Spinner />}
      {showUpdate && (
        <EditAppointment
          id={id}
          data={appointmentData}
          setShowUpdate={setShowUpdate}
        />
      )}
    </Fragment>
  );
}
