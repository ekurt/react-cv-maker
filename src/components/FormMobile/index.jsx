import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const FormMobile = () => {
  const { language } = useSelector((state) => state.language);

  let div;

  if (language === "en") {
    div = (
      <span>
        We recommend using it on <span className={styles.mark}>desktop</span>or
        <span className={styles.mark}>landscape</span>screen.
      </span>
    );
  } else {
    div = (
      <span>
        Daha iyi bir deneyim için<span className={styles.mark}>masaüstü</span>ya
        da
        <span className={styles.mark}>yatay ekranda</span> kullanmanızı
        öneririz.
      </span>
    );
  }

  return <div className={styles.mobile}>{div}</div>;
};
