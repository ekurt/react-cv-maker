import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Textarea } from "../_form";
import styles from "./index.module.css";
import { ProjectsSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card, CardDetail, Buttons } from "../";

export const FormProjects = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.form);

  return (
    <Card title="Projects">
      <Formik
        validationSchema={ProjectsSchema}
        initialValues={{
          name: "",
          link: "",
          description: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setProjects([
              ...projects,
              {
                _id: nanoid(),
                ...values,
              },
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
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setProjects}
              state={projects}
            />
          </Form>
        )}
      </Formik>
      <CardDetail
        data={projects}
        setter={setProjects}
        print={["name", "link"]}
      />
    </Card>
  );
};
