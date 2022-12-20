import React, { Fragment, useState } from "react";
import classes from "./medications.module.css";

export default function Medication({ data }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      {data.map((item) => (
        <Fragment key={item.id}>
          <div key={item.id} className={classes.section}>
            <div className={classes.medic}>
              <h1>8 am</h1>
              <div className={classes.drug}>
                <div className={classes.image}>
                  <span className={classes.name}>{item.name[0]}</span>
                </div>
                <div className={classes.content}>
                  <h1>{item.name}</h1>
                  <p>
                    {item.dose}
                    {item.value}
                  </p>
                  <button onClick={() => setShowModal(true)}>
                    View Instructions
                  </button>
                </div>
                <div className={classes.input}>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
          {showModal && (
            <Fragment>
              <div
                onClick={() => setShowModal(false)}
                className="overlay"
              ></div>
              <section className={classes.popup}>
                <div className={classes.instruction}>
                  <div className={classes.contents}>
                    <h1>doctor's instructions</h1>
                    <p>{item.doctorInstruction}</p>
                  </div>
                  <div className={classes.contents}>
                    <h1>personal note</h1>
                    <p>{item.note}</p>
                  </div>
                  <button onClick={() => setShowModal(false)}>Close</button>
                </div>
              </section>
            </Fragment>
          )}
        </Fragment>
      ))}
    </Fragment>
  );
}
