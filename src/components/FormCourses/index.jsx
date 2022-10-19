import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Textarea } from "../_form";
import styles from "./index.module.css";
import { CoursesSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../../stores/form";

export const FormCourses = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.form);

  return (
    <div className={styles.courses}>
      <h4>Courses</h4>
      <Formik
        validationSchema={CoursesSchema}
        initialValues={{
          name: "",
          company: "",
          description: "",
          from: "",
          to: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(setCourses([{ ...values }, ...courses]));
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.name}
              name="name"
              placeholder="Course Name"
            />
            <Input
              onChange={handleChange}
              value={values.company}
              name="company"
              placeholder="Company Name"
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
            <Textarea
              rows={3}
              onChange={handleChange}
              value={values.description}
              name="description"
              placeholder="Description"
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
