import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "../../hooks";
import styles from "./index.module.css";

export const PreviewProjects = () => {
  const { projects } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

  let items;

  if (projects.length !== 0) {
    items = React.Children.toArray(
      projects.map((item) => {
        let prefix = "";

        if (!item.link.includes("https://") && !item.link.includes("http://"))
          prefix = "https://";

        return (
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <strong>{item.name}</strong>
              <a
                href={prefix + item.link}
                className={styles.itemLink}
                target="_blank"
              >
                {item.link}
              </a>
            </div>
            <div className={styles.textsm}>{item.description}</div>
          </div>
        );
      })
    );
  }

  return (
    <div className={styles.container}>
      {projects.length !== 0 && (
        <>
          <div
            className={styles.title}
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.projects_upper}
          </div>
          {items}
        </>
      )}
    </div>
  );
};
