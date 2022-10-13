import React from "react";
import {
  FormPersonal,
  FormLanguage,
  FormHobbies,
  FormEducation,
  FormExperience,
  FormSkills,
  FormCourses,
  FormReferences,
} from "../index";
import styles from "./index.module.css";

export const Form = () => {
  return (
    <div className={styles.form}>
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
