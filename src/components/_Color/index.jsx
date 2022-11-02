import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setColors } from "../../stores/site";
import styles from "./index.module.css";

export const Color = ({ title, name, defaultValue }) => {
  const { colors } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  return (
    <div className={styles.item}>
      <span className={styles.span}>{title}</span>
      <input
        name={name}
        type="color"
        value={colors[name]}
        className={styles.box}
        onChange={(e) =>
          dispatch(setColors({ ...colors, [name]: e.target.value }))
        }
        onDoubleClick={() =>
          dispatch(setColors({ ...colors, [name]: defaultValue }))
        }
      />
    </div>
  );
};
