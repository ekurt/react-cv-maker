import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "../../hooks";
import styles from "./index.module.css";

export const PreviewCourses = () => {
  const { courses } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

  let items;

  if (courses.length !== 0) {
    items = React.Children.toArray(
      courses.map((item) => (
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <strong>{item.name}</strong>
            <span>
              {item.from} - {item.to}
            </span>
          </div>
          <div>{item.company}</div>
          <div className={styles.textsm}>{item.description}</div>
        </div>
      ))
    );
  }

  return (
    <div className={styles.container}>
      {courses.length !== 0 && (
        <>
          <div
            className={styles.title}
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.courses_upper}
          </div>
          {items}
        </>
      )}
    </div>
  );
};
