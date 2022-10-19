import React from "react";
import styles from "./index.module.css";

export const FormMobile = () => {
	return (
    <div className={styles.mobile}>
      <span>
        We recommend using it on <span className={styles.mark}>desktop</span>or
        <span className={styles.mark}>landscape</span>screen.
      </span>
    </div>
  );
};
