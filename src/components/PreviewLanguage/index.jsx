import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const PreviewLanguage = () => {
  const { languages } = useSelector((state) => state.form);

  return (
    <div>
      <pre>{JSON.stringify(languages, null, 2)}</pre>
    </div>
  );
};
