import React from "react";
import { useSelector } from "react-redux";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import styles from "./index.module.css";
import { useWords } from "../../hooks";

export const PreviewSkills = () => {
  const { skills } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

  let items;

  if (skills.length !== 0) {
    items = React.Children.toArray(
      skills.map((item) => {
        const levels = [];
        for (let index = 1; index <= item.level; index++) {
          levels.push(React.Children.toArray(<FaCircle />));
        }
        for (let index = item.level; index < 10; index++) {
          levels.push(React.Children.toArray(<FaRegCircle />));
        }
        return (
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <strong>{item.name}</strong>
              <span className={styles.levels}>{levels}</span>
            </div>
          </div>
        );
      })
    );
  }

  return (
    <div className={styles.container}>
      {skills.length !== 0 && (
        <>
          <div
            className={styles.title}
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.skills_upper}
          </div>
          {items}
        </>
      )}
    </div>
  );
};
