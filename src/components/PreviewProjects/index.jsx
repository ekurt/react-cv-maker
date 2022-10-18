import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const PreviewProjects = () => {
  const { projects } = useSelector((state) => state.form);

  let items;

  if (projects.length !== 0) {
    items = React.Children.toArray(
      projects.map((item) => (
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <strong>{item.name}</strong>
          </div>
          <div className={styles.textsm}>{item.link}</div>
        </div>
      ))
    );
  }

  return (
    <div className={styles.container}>
      {projects.length !== 0 && (
        <>
          <div className={styles.title}>Projects</div>
          {items}
        </>
      )}
    </div>
  );
};
