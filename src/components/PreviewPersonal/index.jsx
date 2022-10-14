import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./index.module.css";

export const PreviewPersonal = () => {
  const { nameSurname, title, photo, address, gsm, letter } = useSelector(
    (state) => state.form.personal
  );

  return (
    <div className={styles.personal}>
      {photo && (
        <div className="p-8">
          <img className="rounded-full" src={photo} alt="" />
        </div>
      )}
      {nameSurname && <div>Name Surname: {nameSurname}</div>}
      {title && <div>Title: {title}</div>}
      {address && <div>Address: {address}</div>}
      {gsm && <div>Mobile Phone: {gsm}</div>}
      {letter && <div>Email Address: {letter}</div>}
    </div>
  );
};
