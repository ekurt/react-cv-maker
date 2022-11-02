import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "../../hooks";
import styles from "./index.module.css";

export const PreviewReferences = () => {
  const { references } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

  let items;

  if (references.length !== 0) {
    items = React.Children.toArray(
      references.map((item) => (
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <strong>
              {item.name}
              {item.title ? "," : null} {item.title}
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
          <div
            className={styles.title}
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.references_upper}
          </div>
          {items}
        </>
      )}
    </div>
  );
};
