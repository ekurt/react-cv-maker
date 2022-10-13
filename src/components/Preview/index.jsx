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
      <div className="w-2/6 bg-blue-400 h-full">
        <PreviewPersonal />
        <PreviewLanguage />
        <PreviewHobbies />
      </div>
      <div className="w-4/6 bg-green-400 h-full">
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
