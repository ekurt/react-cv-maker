import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setColors } from "../../stores/site";
import styles from "./index.module.css";

const LOCAL_STORAGE_COLORS = "cv-maker-colors";

export const Color = ({ title, name, defaultValue }) => {
  const { colors } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_COLORS, JSON.stringify(colors));
  }, [colors]);

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
