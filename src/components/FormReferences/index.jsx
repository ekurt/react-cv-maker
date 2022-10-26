import React from "react";
import { Formik, Form } from "formik";
import { Input, Button } from "../_form";
import styles from "./index.module.css";
import { ReferencesSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setReferences } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card, CardDetail, Buttons } from "../";

export const FormReferences = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { references } = useSelector((state) => state.form);

  return (
    <Card title="References">
      <Formik
        validationSchema={ReferencesSchema}
        initialValues={{
          name: "",
          title: "",
          gsm: "",
          company: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setReferences([
              ...references,
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
              placeholder="Reference Name"
            />
            <Input
              onChange={handleChange}
              value={values.gsm}
              name="gsm"
              placeholder="Phone Number"
            />
            <Input
              onChange={handleChange}
              value={values.company}
              name="company"
              placeholder="Company Name"
            />
            <Input
              onChange={handleChange}
              value={values.title}
              name="title"
              placeholder="Reference Title"
            />
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setReferences}
              state={references}
            />
          </Form>
        )}
      </Formik>
      <CardDetail
        data={references}
        setter={setReferences}
        print={["name", "title"]}
      />
    </Card>
  );
};
