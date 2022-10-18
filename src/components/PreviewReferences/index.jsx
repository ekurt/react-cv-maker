import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const PreviewReferences = () => {
  const { references } = useSelector((state) => state.form);

  let items;

  if (references.length !== 0) {
    items = React.Children.toArray(
      references.map((item) => (
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <strong>
              {item.name}, {item.title}
            </strong>
            <span>{item.company}</span>
          </div>
          <div className={styles.textsm}>{item.gsm}</div>
        </div>
      ))
    );
  }

  return (
    <div className={styles.container}>
      {references.length !== 0 && (
        <>
          <div className={styles.title}>references</div>
          {items}
        </>
      )}
    </div>
  );
};
