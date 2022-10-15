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
      {nameSurname && (
        <>
          <div className={styles.title}>Personal</div>
          <div className={styles.item}>
            <strong>Name Surname</strong> {nameSurname}
          </div>
        </>
      )}
      {title && (
        <div className={styles.item}>
          <strong>Title</strong> {title}
        </div>
      )}
      {address && (
        <div className={styles.item}>
          <strong>Address</strong> {address}
        </div>
      )}
      {gsm && (
        <div className={styles.item}>
          <strong>Mobile Phone</strong> {gsm}
        </div>
      )}
      {letter && (
        <div className={styles.item}>
          <strong>Email Address</strong> {letter}
        </div>
      )}
    </div>
  );
};
