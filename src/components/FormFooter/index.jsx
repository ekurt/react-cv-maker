import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const FormFooter = () => {
  const { language } = useSelector((state) => state.language);

  let div;

  if (language === "en") {
    div = (
      <>
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
      </>
    );
  } else {
    div = (
      <>
        <span>
          Katkıda bulunmak için
          <a
            href="https://github.com/ekurt/react-cv-maker"
            target="_blank"
            className={styles.mark}
          >
            repoyu
          </a>
          ziyaret edin.
        </span>
        <span>
          Diğer projelerim için
          <a href="https://ekurt.dev" target="_blank" className={styles.mark}>
            websitemi
          </a>
          ziyaret edin.
        </span>
      </>
    );
  }

  return <div className={styles.footer}>{div}</div>;
};
