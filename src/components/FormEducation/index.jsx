import React from "react";
import { Formik, Form } from "formik";
import { Input } from "../_form";
import styles from "./index.module.css";
import { EducationSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card, CardDetail, Buttons } from "../";
import { useWords } from "../../hooks";

export const FormEducation = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { education } = useSelector((state) => state.form);
  const words = useWords();

  return (
    <Card title={words.education}>
      <Formik
        validationSchema={EducationSchema}
        initialValues={{
          school: "",
          subject: "",
          city: "",
          degree: "",
          from: "",
          to: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setEducation([
              {
                _id: nanoid(),
                ...values,
              },
              ...education,
            ])
          );
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.school}
              name="school"
              placeholder={words.school}
            />
            <Input
              onChange={handleChange}
              value={values.subject}
              name="subject"
              placeholder={words.subject}
            />
            <Input
              onChange={handleChange}
              value={values.degree}
              name="degree"
              placeholder={words.degree}
            />
            <Input
              onChange={handleChange}
              value={values.city}
              name="city"
              placeholder={words.city}
            />
            <Input
              onChange={handleChange}
              value={values.from}
              name="from"
              placeholder={words.from}
            />
            <Input
              onChange={handleChange}
              value={values.to}
              name="to"
              placeholder={words.to}
            />
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setEducation}
              state={education}
            />
          </Form>
        )}
      </Formik>
      <CardDetail
        data={education}
        setter={setEducation}
        print={["school", "subject"]}
      />
    </Card>
  );
};
