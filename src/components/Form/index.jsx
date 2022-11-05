import React from "react";
import { useDispatch } from "react-redux";
import {
  Language,
  FormMobile,
  FormButtons,
  FormColors,
  FormMargins,
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
  FormFooter,
} from "../index";
import styles from "./index.module.css";

export const Form = ({ handlePrint }) => {
  const dispatch = useDispatch();

  const handleResetData = (setter) => {
    dispatch(setter([]));
  };

  return (
    <div className={styles.form}>
      <Language />
      <FormMobile />
      <FormButtons handlePrint={handlePrint} />
      <FormColors />
      <FormMargins />
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
      <FormFooter />
    </div>
  );
};
