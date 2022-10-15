import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const PreviewLanguage = () => {
  const { languages } = useSelector((state) => state.form);

  let items;

  if (languages.length !== 0) {
    items = React.Children.toArray(
      languages.map((item) => (
        <div className={styles.item}>
          <strong>{item.name}</strong> {item.level}
        </div>
      ))
    );
  }

  return (
    <div className={styles.container}>
      {languages.length !== 0 && (
        <>
          <div className={styles.title}>Languages</div>
          {items}
        </>
      )}
    </div>
  );
};
