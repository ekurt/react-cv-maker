import React from "react";
import { Formik, Form } from "formik";
import { Input, Button } from "../_form";
import styles from "./index.module.css";
import { ProjectsSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../stores/form";

export const FormProjects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.form);

  return (
    <div className={styles.projects}>
      <h4>Projects</h4>
      <Formik
        validationSchema={ProjectsSchema}
        initialValues={{
          name: "Sample Project",
          link: "https://github.com/ekurt/sample-project",
        }}
        onSubmit={(values, actions) => {
          dispatch(setProjects([...projects, { ...values }]));
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.name}
              name="name"
              placeholder="Project Name"
            />
            <Input
              onChange={handleChange}
              value={values.link}
              name="link"
              placeholder="Project Link"
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
