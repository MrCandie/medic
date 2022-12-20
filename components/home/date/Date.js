import React from "react";
import classes from "./date.module.css";

export default function Dates({ data }) {
  const today = new Date();
  const tommorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );
  // console.log(today);
  // console.log(yesterday);

  const recentDate = data.filter((item) => {
    const itemDate = new Date(item.startDate);

    return (
      itemDate.getDate() - itemDate.getMonth() - itemDate.getFullYear() ===
        today.getDate() - today.getMonth() - today.getFullYear() ||
      itemDate.getDate() - itemDate.getMonth() - itemDate.getFullYear() ===
        tommorrow.getDate() - tommorrow.getMonth() - tommorrow.getFullYear()
    );
  });

  const slicedData = recentDate.slice(0, 4);

  return (
    <div className={classes.container}>
      {slicedData.map((item) => {
        const dates = new Date(item.startDate);
        const dayName = new Intl.DateTimeFormat("en-US", {
          dateStyle: "full",
        }).format(dates);

        const day = dayName.slice(0, 3);
        const date = dates.getDate();

        const isToday =
          today.getDate() - today.getMonth() - today.getFullYear() ===
          dates.getDate() - dates.getMonth() - dates.getFullYear();

        return (
          <div className={!isToday ? classes.date : classes.today}>
            <p>{isToday ? "Today" : day}</p>
            <h1>{isToday ? item.startTime : date}</h1>
          </div>
        );
      })}
    </div>
  );
}
