import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const PreviewHobbies = () => {
  const { hobbies } = useSelector((state) => state.form);

  return (
    <div>
      {hobbies.length !== 0 && <pre>{JSON.stringify(hobbies, null, 2)}</pre>}
    </div>
  );
};
