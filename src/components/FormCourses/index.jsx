import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Textarea } from "../_form";
import styles from "./index.module.css";
import { CoursesSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card } from "../";

export const FormCourses = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.form);

  return (
    <Card title="Courses">
      <Formik
        validationSchema={CoursesSchema}
        initialValues={{
          _id: nanoid(),
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
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
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
            <Button type="submit" variant="info" disabled={!dirty}>
              ADD
            </Button>
            <Button
              type="reset"
              variant="danger"
              onClick={handleReset}
              disabled={!dirty}
            >
              CLEAR FORM
            </Button>
            <Button
              type="button"
              variant="danger"
              onClick={() => {
                handleResetData(setCourses);
              }}
              disabled={courses.length === 0}
            >
              CLEAR DATA
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
