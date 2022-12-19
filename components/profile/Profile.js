import React from "react";
import classes from "./profile.module.css";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineLiveHelp } from "react-icons/md";
import Link from "next/link";

export default function Profile() {
  return (
    <section className={classes.section}>
      <div className={classes.head}>
        <div className={classes.image}>
          <img src="/images/drug1.jpg" />
        </div>
        <h2>mr candie</h2>
        <p>test@gmail.com</p>
      </div>
      <div className={classes.profile}>
        <hr />
        <Link href="" className={classes.item}>
          <div className={classes.items}>
            <span>
              <AiOutlineEdit />
            </span>
            <div>
              <h2>personal information</h2>
              <p>edit your personal information</p>
            </div>
          </div>
          <span>
            <FaGreaterThan />
          </span>
        </Link>
        <hr />
        <Link href="" className={classes.item}>
          <div className={classes.items}>
            <span>
              <AiOutlineHistory />
            </span>
            <div>
              <h2>history</h2>
              <p>view all your medication and appointment history</p>
            </div>
          </div>
          <span>
            <FaGreaterThan />
          </span>
        </Link>
        <hr />
        <Link href="" className={classes.item}>
          <div className={classes.items}>
            <span>
              <RiLockPasswordLine />
            </span>
            <div>
              <h2>password</h2>
              <p>manage password</p>
            </div>
          </div>
          <span>
            <FaGreaterThan />
          </span>
        </Link>
        <hr />
        <Link href="" className={classes.item}>
          <div className={classes.items}>
            <span>
              <MdOutlineLiveHelp />
            </span>
            <div>
              <h2>help</h2>
              <p>chat with us</p>
            </div>
          </div>
          <span>
            <FaGreaterThan />
          </span>
        </Link>
        <hr />
        <div className={classes.logout}>
          <span>
            <RiLogoutCircleLine />
          </span>
          <div>
            <h2>logout</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
