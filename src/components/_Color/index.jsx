import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setColors } from "../../stores/site";
import styles from "./index.module.css";

export const Color = ({ title, defaultValue }) => {
  const { colors } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  let color = title.toLowerCase();

  return (
    <div className={styles.item}>
      <span className={styles.span}>{title}</span>
      <input
        name={color}
        type="color"
        value={colors[color]}
        className={styles.box}
        onChange={(e) =>
          dispatch(setColors({ ...colors, [color]: e.target.value }))
        }
        onDoubleClick={() =>
          dispatch(setColors({ ...colors, [color]: defaultValue }))
        }
      />
    </div>
  );
};
