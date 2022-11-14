import React from "react";
import { Color } from "../";
import { useWords } from "../../hooks";
import styles from "./index.module.css";

export const FormColors = () => {
  const words = useWords();

  return (
    <div className={styles.container}>
      <Color title={words.primary} name="primary" defaultValue="#373740" />
      <Color title={words.secondary} name="secondary" defaultValue="#E1D8CF" />
      <Color title={words.title} name="title" defaultValue="#E1D8CF" />
      <Color title={words.subtitle} name="subtitle" defaultValue="#FFFFFF" />
      <Color title={words.titles} name="titles" defaultValue="#E1D8CF" />
      <Color title={words.textLeft} name="text1" defaultValue="#43434C" />
      <Color title={words.textRight} name="text2" defaultValue="#43434C" />

      <span className={styles.hint}>{words.color_hint}</span>
    </div>
  );
};
