import React from "react";
import { Color } from "../";
import styles from "./index.module.css";

export const FormColors = () => {
  return (
    <div className={styles.container}>
      <Color title="Primary" defaultValue="#373740" />
      <Color title="Secondary" defaultValue="#E1D8CF" />
      <Color title="Body" defaultValue="#FFFFFF" />
      <Color title="Title" defaultValue="#E1D8CF" />
      <Color title="Subtitle" defaultValue="#FFFFFF" />
      <Color title="Titles" defaultValue="#E1D8CF" />
      <Color title="Text" defaultValue="#43434C" />

      <span className={styles.hint}>
        * double click the color for the default color
      </span>
    </div>
  );
};
