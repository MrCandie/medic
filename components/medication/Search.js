import React from "react";
import { BsFillFilterSquareFill } from "react-icons/bs";
import classes from "./medication.module.css";

export default function Search() {
  return (
    <section className={classes.search}>
      <form>
        <input type="search" placeholder="Search for medication name" />
      </form>
      <span>
        <BsFillFilterSquareFill />
      </span>
    </section>
  );
}
