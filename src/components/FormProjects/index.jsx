import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Textarea } from "../_form";
import styles from "./index.module.css";
import { ProjectsSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card } from "../_Card";

export const FormProjects = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.form);

  return (
    <Card title="Projects">
      <Formik
        validationSchema={ProjectsSchema}
        initialValues={{
          _id: nanoid(),
          name: "",
          link: "",
          description: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(setProjects([...projects, { ...values }]));
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
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
                handleResetData(setProjects);
              }}
              disabled={projects.length === 0}
            >
              CLEAR DATA
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
