import React from "react";
import { Formik, Form } from "formik";
import { Input, Textarea } from "../_form";
import styles from "./index.module.css";
import { ProjectsSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card, CardDetail, Buttons } from "../";
import { useWords } from "../../hooks";

export const FormProjects = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.form);
  const words = useWords();

  return (
    <Card title={words.projects}>
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
              placeholder={words.project}
            />
            <Input
              onChange={handleChange}
              value={values.link}
              name="link"
              placeholder={words.link}
            />
            <Textarea
              rows={3}
              onChange={handleChange}
              value={values.description}
              name="description"
              placeholder={words.description}
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
