import React, { Children } from "react";
import styles from "./index.module.css";

export const Card = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};
