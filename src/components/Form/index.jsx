import React from "react";
import {
  FormButtons,
  FormPersonal,
  FormLanguage,
  FormHobbies,
  FormEducation,
  FormExperience,
  FormSkills,
  FormProjects,
  FormCourses,
  FormReferences,
} from "../index";
import styles from "./index.module.css";

export const Form = ({ handlePrint }) => {
  return (
    <div className={styles.form}>
      <FormButtons handlePrint={handlePrint} />
      <FormPersonal />
      <FormLanguage />
      <FormHobbies />
      <FormEducation />
      <FormExperience />
      <FormSkills />
      <FormProjects />
      <FormCourses />
      <FormReferences />
    </div>
  );
};
