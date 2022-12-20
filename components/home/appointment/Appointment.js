import React from "react";
import classes from "./appointments.module.css";
import { GoLocation } from "react-icons/go";
import { useRouter } from "next/router";
import Empty from "../../home/Empty";
// import Pulse from "react-reveal/Pulse";

export default function Appointment({ data }) {
  const router = useRouter();

  if (data.length === 0) {
    return <Empty title="appointments" />;
  }

  return (
    <div className={classes.section}>
      {data.map((item) => (
        <div key={item.id} className={classes.container}>
          <h1>{item.time}</h1>
          <div
            onClick={() => router.push(`/appointment/${item.id}`)}
            className={classes.appointment}
          >
            <div className={classes.content}>
              <h1>{item.name}</h1>
              <p>sore throat and difficulty breathing</p>
              <div className={classes.location}>
                <span>
                  <GoLocation />
                </span>
                <p>{item.address}</p>
              </div>
              <button onClick={() => router.push(`/appointment/${item.id}`)}>
                View Details
              </button>
            </div>
            <div className={classes.input}>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
