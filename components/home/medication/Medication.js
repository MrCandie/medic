import React, { Fragment, useState } from "react";
import classes from "./medications.module.css";
import Pulse from "react-reveal/Pulse";

export default function Medication({ data }) {
  const [showModal, setShowModal] = useState(false);
  const today = new Date();
  const recentData = data.filter((item) => {
    const itemDate = new Date(item.startDate);
    return (
      itemDate.getDate() - itemDate.getMonth() - itemDate.getFullYear() ===
      today.getDate() - today.getMonth() - today.getFullYear()
    );
  });
  return (
    <Fragment>
      <div className={classes.section}>
        {recentData.slice(0, 3).map((item) => {
          const date = new Date(item.startDate);

          const day =
            today.getDate() - today.getMonth() - today.getFullYear() ===
            date.getDate() - date.getMonth() - date.getFullYear();

          return (
            <Pulse>
              <Fragment key={item.id}>
                <div className={classes.medic}>
                  <h1>{day && "Today"}</h1>
                  <div className={classes.drug}>
                    <div className={classes.image}>
                      <span className={classes.name}>{item.name[0]}</span>
                    </div>
                    <div className={classes.content}>
                      {day ? (
                        <h2 className={classes.tag}>
                          Due Today at ${item.startTime} and ${item.endTime}
                        </h2>
                      ) : (
                        ""
                      )}

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
                        <button onClick={() => setShowModal(false)}>
                          Close
                        </button>
                      </div>
                    </section>
                  </Fragment>
                )}
              </Fragment>
            </Pulse>
          );
        })}
      </div>
    </Fragment>
  );
}
