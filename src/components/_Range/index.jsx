import React, { useEffect } from "react";
import { setMargins } from "../../stores/site";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";

const LOCAL_STORAGE_MARGINS = "cv-maker-margins";

export const Range = ({ title, state }) => {
  const dispatch = useDispatch();
  const { margins } = useSelector((state) => state.site);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_MARGINS, JSON.stringify(margins));
  }, [margins]);

  return (
    <>
      <div className={styles.item}>
        <span className={styles.span}>
          {title} ({margins[state]}px)
        </span>
        <input
          name={state}
          type="range"
          min={0}
          max={50}
          defaultValue={margins[state]}
          step={1}
          list={state}
          onChange={(e) =>
            dispatch(setMargins({ ...margins, [state]: e.target.value }))
          }
          className={styles.range}
        />
        <datalist id={state} className={styles.datalist}>
          <option className={styles.option} value="0" label="0"></option>
          <option className={styles.option} value="10" label="10"></option>
          <option className={styles.option} value="20" label="20"></option>
          <option className={styles.option} value="30" label="30"></option>
          <option className={styles.option} value="40" label="40"></option>
          <option className={styles.option} value="50" label="50"></option>
        </datalist>
      </div>
    </>
  );
};
