import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLanguage } from "../../stores/language";
import styles from "./index.module.css";

export const Language = () => {
  const dispatch = useDispatch();
  const { words, language } = useSelector((state) => state.language);

  const handleLanguage = () => {
    dispatch(setLanguage(language === "en" ? "tr" : "en"));
  };

  return (
    <div
      className={styles.language}
      onClick={handleLanguage}
    >
      <ReactCountryFlag
        countryCode={language === "en" ? "TR" : "GB"}
        style={{
          fontSize: "22px",
          width: "auto",
        }}
        svg
      />
      <span className={styles.span}>{words[language]["set_language"]}</span>
    </div>
  );
};
