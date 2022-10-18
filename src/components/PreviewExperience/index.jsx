import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const PreviewExperience = () => {
  const { experience } = useSelector((state) => state.form);

  let items;

  if (experience.length !== 0) {
    items = React.Children.toArray(
      experience.map((item) => (
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <strong>{item.position}</strong>
            <span>
              {item.from} - {item.to}
            </span>
          </div>
          <div>
            {item.company}, {item.city}
          </div>
          <div className={styles.textsm}>{item.description}</div>
        </div>
      ))
    );
  }

  return (
    <div className={styles.container}>
      {experience.length !== 0 && (
        <>
          <div className={styles.title}>Experiences</div>
          {items}
        </>
      )}
    </div>
  );
};
