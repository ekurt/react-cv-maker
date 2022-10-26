import React from "react";
import { Button } from "../_form";
import styles from "./index.module.css";

export const Buttons = ({
  dirty,
  handleReset,
  handleResetData,
  setter,
  state,
  isArray = true,
}) => {
  return (
    <>
      <Button type="submit" variant="info" disabled={!dirty}>
        ADD
      </Button>
      <Button
        type="reset"
        variant="danger"
        onClick={handleReset}
        disabled={!dirty}
      >
        CLEAR
      </Button>
      <Button
        type="button"
        variant="danger"
        onClick={() => {
          handleResetData(setter);
        }}
        disabled={
          isArray ? state.length === 0 : Object.keys(state).length === 0
        }
      >
        CLEAR ALL
      </Button>
    </>
  );
};
