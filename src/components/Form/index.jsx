import React from "react";
import { useDispatch } from "react-redux";
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
  FormSocial,
} from "../index";
import styles from "./index.module.css";

export const Form = ({ handlePrint }) => {
  const dispatch = useDispatch();

  const handleResetData = (setter) => {
    dispatch(setter([]));
  };

  return (
    <div className={styles.form}>
      <FormButtons handlePrint={handlePrint} />
      <FormPersonal />
      <FormSocial handleResetData={handleResetData} />
      <FormLanguage handleResetData={handleResetData} />
      <FormHobbies handleResetData={handleResetData} />
      <FormEducation handleResetData={handleResetData} />
      <FormExperience handleResetData={handleResetData} />
      <FormSkills handleResetData={handleResetData} />
      <FormProjects handleResetData={handleResetData} />
      <FormCourses handleResetData={handleResetData} />
      <FormReferences handleResetData={handleResetData} />
    </div>
  );
};
