import Link from "next/link";
import React from "react";
import classes from "./navigation.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";

export default function Navigation() {
  return (
    <div className={classes.container}>
      <Link href="/">
        <div className={classes.nav}>
          <span>
            <AiOutlineHome />
          </span>
          Home
        </div>
      </Link>
      <Link href="/medication">
        <div className={classes.nav}>
          <span>
            <AiOutlineMedicineBox />
          </span>
          Medication
        </div>
      </Link>
      <Link href="/appointment">
        <div className={classes.nav}>
          <span>
            <SlCalender />
          </span>
          Appointment
        </div>
      </Link>
      <Link href="/profile">
        <div className={classes.nav}>
          <span>
            <CiUser />
          </span>
          Profile
        </div>
      </Link>
    </div>
  );
}
