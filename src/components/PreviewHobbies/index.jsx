import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const PreviewHobbies = () => {
  const { hobbies } = useSelector((state) => state.form);

  let items;

  if (hobbies.length !== 0) {
    items = React.Children.toArray(
      hobbies.map((item) => (
        <div className={styles.item}>
          <strong>{item}</strong>
        </div>
      ))
    );
  }

  return (
    <div className={styles.container}>
      {hobbies.length !== 0 && (
        <>
          <div className={styles.title}>Hobbies</div>
          {items}
        </>
      )}
    </div>
  );
};
