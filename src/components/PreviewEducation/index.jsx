import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "../../hooks";
import styles from "./index.module.css";

export const PreviewEducation = () => {
  const { education } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();
  
  let items;

  if (education.length !== 0) {
    items = React.Children.toArray(
      education.map((item) => (
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <strong>
              {item.degree} / {item.subject}
            </strong>
            <span>
              {item.from} - {item.to}
            </span>
          </div>
		  <div>
			{item.school}, {item.city}
		  </div>
        </div>
      ))
    );
  }

  return (
    <div className={styles.container}>
      {education.length !== 0 && (
        <>
          <div
            className={styles.title}
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.education_upper}
          </div>
          {items}
        </>
      )}
    </div>
  );
};
