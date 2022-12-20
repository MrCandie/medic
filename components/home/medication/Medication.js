import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import classes from "./medications.module.css";
import Empty from "../Empty";
// import Pulse from "react-reveal/Pulse";

export default function Medication({ data }) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const today = new Date();
  const recentData = data.filter((item) => {
    const itemDate = new Date(item.startDate);
    return (
      itemDate.getDate() - itemDate.getMonth() - itemDate.getFullYear() ===
      today.getDate() - today.getMonth() - today.getFullYear()
    );
  });
  if (data.length === 0) {
    return <Empty title="medications" />;
  }
  return (
    <Fragment>
      <div className={classes.section}>
        {recentData.slice(0, 3).map((item) => {
          const date = new Date(item.startDate);

          const day =
            today.getDate() - today.getMonth() - today.getFullYear() ===
            date.getDate() - date.getMonth() - date.getFullYear();

          return (
            <Fragment key={item.id}>
              <div className={classes.medic}>
                <h1>{day && "Today"}</h1>
                <div
                  onClick={() => router.push(`/medication/${item.id}`)}
                  className={classes.drug}
                >
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
                    <button
                      onClick={() => {
                        setShowModal(true);
                        router.push(`/medication/${item.id}`);
                      }}
                    >
                      View Instructions
                    </button>
                  </div>
                  <div className={classes.input}>
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}
