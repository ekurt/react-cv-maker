import React from "react";
import { Button } from "../_form";
import styles from "./index.module.css";

export const FormButtons = ({ handlePrint }) => {
  return (
    <div className={styles.container}>
      <Button onClick={null} variant="success">
        LOAD EXAMPLE
      </Button>
      <Button onClick={null} variant="danger">
        CLEAR ALL FORMS
      </Button>
      <Button onClick={handlePrint} variant="info">
        SAVE AS PDF
      </Button>
    </div>
  );
};
