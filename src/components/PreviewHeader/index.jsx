import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const PreviewHeader = () => {
  const { nameSurname, title, description } = useSelector(
    (state) => state.form.personal
  );

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{nameSurname}</h1>
        <h2 className={styles.subtitle}>{title}</h2>
      </div>
      <div className={styles.description}>{description}</div>
    </>
  );
};
