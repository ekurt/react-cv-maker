import React from "react";
import styles from "./index.module.css";

export const FormFooter = () => {
  return (
    <div className={styles.footer}>
      <span>
        To contribute, visit my
        <a
          href="https://github.com/ekurt/react-cv-maker"
          target="_blank"
          className={styles.mark}
        >
          github
        </a>
        repo.
      </span>
      <span>
        Visit
        <a href="https://ekurt.dev" target="_blank" className={styles.mark}>
          my website
        </a>
        for my other projects.
      </span>
    </div>
  );
};
