import React, { forwardRef } from "react";
import {
  PreviewPersonal,
  PreviewLanguage,
  PreviewHobbies,
  PreviewHeader,
  PreviewEducation,
  PreviewExperience,
  PreviewSkills,
  PreviewProjects,
  PreviewCourses,
  PreviewReferences,
} from "../index";
import styles from "./index.module.css";

export const Preview = forwardRef((props, ref) => {
  return (
    <div className={styles.preview} ref={ref}>
      <div className={styles.leftSide}>
        <PreviewPersonal />
        <PreviewLanguage />
        <PreviewHobbies />
      </div>
      <div className={styles.rightSide}>
        <PreviewHeader />
        <PreviewEducation />
        <PreviewExperience />
        <PreviewSkills />
        <PreviewProjects />
        <PreviewCourses />
        <PreviewReferences />
      </div>
    </div>
  );
});
