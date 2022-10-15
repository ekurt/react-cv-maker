import React from "react";
import { Formik, Form } from "formik";
import { Input, Button } from "../_form";
import styles from "./index.module.css";
import { EducationSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "../../stores/form";

export const FormEducation = () => {
  const dispatch = useDispatch();
  const { education } = useSelector((state) => state.form);

  return (
    <div className={styles.education}>
      <h4>Education</h4>
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
        onSubmit={(values) => {
          dispatch(setEducation([...education, { ...values }]));
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.school}
              name="school"
              placeholder="School Name"
            />
            <Input
              onChange={handleChange}
              value={values.subject}
              name="subject"
              placeholder="Subject"
            />
            <Input
              onChange={handleChange}
              value={values.degree}
              name="degree"
              placeholder="Degree"
            />
            <Input
              onChange={handleChange}
              value={values.city}
              name="city"
              placeholder="City"
            />
            <Input
              onChange={handleChange}
              value={values.from}
              name="from"
              placeholder="From"
            />
            <Input
              onChange={handleChange}
              value={values.to}
              name="to"
              placeholder="To"
            />
            <Button type="submit" variant="info">
              ADD
            </Button>
            <Button type="reset" variant="danger" onClick={handleReset}>
              CLEAR
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
