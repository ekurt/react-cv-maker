import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Textarea } from "../_form";
import styles from "./index.module.css";
import { CoursesSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card, CardDetail, Buttons } from "../";

export const FormCourses = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.form);

  return (
    <Card title="Courses">
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
          dispatch(
            setCourses([
              {
                _id: nanoid(),
                ...values,
              },
              ...courses,
            ])
          );
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
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setCourses}
              state={courses}
            />
          </Form>
        )}
      </Formik>
      <CardDetail
        data={courses}
        setter={setCourses}
        print={["name", "company"]}
      />
    </Card>
  );
};
