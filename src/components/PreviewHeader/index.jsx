import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const PreviewHeader = () => {
  const { nameSurname, title, description } = useSelector(
    (state) => state.form.personal
  );
  
  const { colors } = useSelector((state) => state.site);

  return (
    <>
      <div className={styles.container} style={{ background: colors.primary }}>
        <h1 className={styles.title} style={{ color: colors.title }}>
          {nameSurname}
        </h1>
        <h2 className={styles.subtitle} style={{ color: colors.subtitle }}>
          {title}
        </h2>
      </div>
      {description && <div className={styles.description}>{description}</div>}
    </>
  );
};
