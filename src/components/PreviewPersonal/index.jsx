import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "../../hooks";

import styles from "./index.module.css";

export const PreviewPersonal = () => {
  const { photo, address, gsm, letter } = useSelector(
    (state) => state.form.personal
  );
  const words = useWords();

  return (
    <div className={styles.container}>
      {photo && (
        <div className={styles.photo}>
          <img className={styles.rounded} src={photo} alt="" />
        </div>
      )}
      {address && (
        <div className={styles.item}>
          <strong>{words.address}</strong> {address}
        </div>
      )}
      {gsm && (
        <div className={styles.item}>
          <strong>{words.phone_number}</strong>
          <a href={`tel:${gsm.replace(/\s/g, "")}`}>{gsm}</a>
        </div>
      )}
      {letter && (
        <div className={styles.item}>
          <strong>{words.email_address}</strong>
          <a href={`mailto:${letter}`}>{letter}</a>
        </div>
      )}
    </div>
  );
};
