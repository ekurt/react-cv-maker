import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./index.module.css";

export const PreviewPersonal = () => {
  const { nameSurname, title, photo, address, gsm, letter } = useSelector(
    (state) => state.form.personal
  );

  return (
    <div className={styles.container}>
      {photo && (
        <div className={styles.photo}>
          <img className={styles.rounded} src={photo} alt="" />
        </div>
      )}
      {address && (
        <div className={styles.item}>
          <strong>Address</strong> {address}
        </div>
      )}
      {gsm && (
        <div className={styles.item}>
          <strong>Mobile Phone</strong>
          <a href={`tel:${gsm.replace(/\s/g, "")}`}>{gsm}</a>
        </div>
      )}
      {letter && (
        <div className={styles.item}>
          <strong>Email Address</strong>
          <a href={`mailto:${letter}`}>{letter}</a>
        </div>
      )}
    </div>
  );
};
