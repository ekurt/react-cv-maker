import React from "react";
import { useWords } from "../../hooks";
import { Range } from "../";
import styles from "./index.module.css";

export const FormMargins = () => {
  const words = useWords();

  return (
    <div className={styles.container}>
      <Range title={words.top} state="top" />
      <Range title={words.right} state="right" />
      <Range title={words.bottom} state="bottom" />
      <Range title={words.left} state="left" />

      <span className={styles.hint}>{words.margin_hint}</span>
    </div>
  );
};
