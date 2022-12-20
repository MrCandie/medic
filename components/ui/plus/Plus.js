import React, { Fragment, useState } from "react";
import { MdAdd } from "react-icons/md";
import Option from "./option";
import classes from "./plus.module.css";
import Pulse from "react-reveal/Pulse";

export default function Plus() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <Pulse>
        <span
          onClick={() => setShowModal((prev) => !prev)}
          className={classes.add}
        >
          <MdAdd />
        </span>
      </Pulse>
      {showModal && <Option setShowModal={setShowModal} />}
    </Fragment>
  );
}
