import { useRouter } from "next/router";
import { drugData } from "../../data/store";
import classes from "./medication.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";

export default function MedicationDetail({ id }) {
  const drug = drugData.find((item) => item.id === id);
  if (!drug) {
    return <p>Loading...</p>;
  }

  return (
    <section className={classes.detail}>
      <div className={classes.img}>
        <img alt="medication description" src={drug.image} />
      </div>
      <div className={classes.description}>
        <h1>{drug.name}</h1>
        <p>{drug.dose}</p>
      </div>
      <div className={classes.duration}>
        <div className={classes.time}>
          <h2>
            <span>
              <AiOutlineClockCircle />
            </span>
            time
          </h2>
          <p>{drug.time}</p>
        </div>
        <div className={classes.time}>
          <h2>
            <span>
              <GiAlarmClock />
            </span>
            remainder
          </h2>
          <p>{drug.remainder}</p>
        </div>
      </div>
      <div className={classes.duration}>
        <div className={classes.time}>
          <h2>
            <span>
              <AiOutlineClockCircle />
            </span>
            duration
          </h2>
          <p>{drug.duration}</p>
        </div>
      </div>
      <div className={classes.instruction}>
        <h1>doctor's instruction</h1>
        <p>{drug.instruction}</p>
      </div>
      <div className={classes.note}>
        <h1>personal note</h1>
        <p>{drug.note}</p>
      </div>
      <div className={classes.action}>
        <button className={classes.edit}>Edit details</button>
        <button className={classes.remove}>Remove</button>
      </div>
    </section>
  );
}
