import React from "react";
import {
  PreviewPersonal,
  PreviewLanguage,
  PreviewHobbies,
  PreviewEducation,
  PreviewExperience,
  PreviewSkills,
  PreviewProjects,
  PreviewCourses,
  PreviewReferences,
} from "../index";
import styles from "./index.module.css";

export const Preview = () => {
  return (
    <div className={styles.preview}>
      <div className={styles.leftSide}>
        <PreviewPersonal />
        <PreviewLanguage />
        <PreviewHobbies />
      </div>
      <div className={styles.rightSide}>
        <PreviewEducation />
        <PreviewExperience />
        <PreviewSkills />
        <PreviewProjects />
        <PreviewCourses />
        <PreviewReferences />
      </div>
    </div>
  );
};
