import React, { Fragment, useContext, useRef, useState } from "react";
import classes from "./profile.module.css";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineLiveHelp } from "react-icons/md";
import Link from "next/link";
import Spinner from "../ui/spinner/spinner";
import { AuthContext } from "../../lib/AuthContext";
import { postData } from "../../lib/auth";
import Password from "../../components/ui/password/Password";
// import Fade from "react-reveal/Fade";

export default function Profile({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [image, setImage] = useState("");
  const auth = useContext(AuthContext);
  const nameRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  function imageHandler(e) {
    setImage(e.target.files[0]);
  }

  async function updateHandler(e) {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const enteredName = nameRef.current.value;

    const profileData = {
      displayName: enteredName,
      photoUrl: URL.createObjectURL(image),
      idToken: token,
      returnSecureToken: false,
    };

    try {
      setLoading(true);
      const response = await postData(profileData);
      setUser(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }

    setShowModal(false);
  }

  return (
    <Fragment>
      <section className={classes.section}>
        <div className={classes.head}>
          <div className={classes.image}>
            <img src={user && user.photoUrl} />
          </div>
          <h2>{user && user.displayName}</h2>
          <p>{user && user.email}</p>
        </div>
        <div className={classes.profile}>
          <hr />
          <div onClick={() => setShowModal(true)} className={classes.item}>
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
          </div>
          <hr />
          <div className={classes.item}>
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
          </div>
          <hr />
          <div onClick={() => setShowPassword(true)} className={classes.item}>
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
          </div>
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
          <div onClick={() => auth.logout()} className={classes.logout}>
            <span>
              <RiLogoutCircleLine />
            </span>
            <div>
              <h2>logout</h2>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <Fragment>
          <div onClick={() => setShowModal(false)} className="overlay"></div>
          <div className={classes.modal}>
            <div>
              <h1>Edit Profile</h1>
              <hr />
              <form onSubmit={updateHandler} className={classes.form}>
                <div className={classes.field}>
                  <label>Enter name</label>
                  <input ref={nameRef} type="text" placeholder="John doe" />
                </div>
                <div className={classes.field}>
                  <label>Upload Picture</label>
                  <input onChange={imageHandler} type="file" />
                </div>
                <button>Update</button>
              </form>
            </div>
          </div>
        </Fragment>
      )}
      {showPassword && <Password modal={setShowPassword} />}
      {loading && <Spinner />}
    </Fragment>
  );
}
