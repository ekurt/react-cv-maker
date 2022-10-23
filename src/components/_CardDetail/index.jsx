import React from "react";
import styles from "./index.module.css";

export const CardDetail = () => {
  return (
    <div className={styles.cardDetail}>
      <hr className={styles.hr} />
      {social.map((item) => (
        <div className={styles.item}>
          {item.name}
          <span>x</span>
        </div>
      ))}
    </div>
  );
};
