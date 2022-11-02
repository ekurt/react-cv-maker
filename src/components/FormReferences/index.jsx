import React from "react";
import { Formik, Form } from "formik";
import { Input } from "../_form";
import styles from "./index.module.css";
import { ReferencesSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setReferences } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card, CardDetail, Buttons } from "../";
import { useWords } from "../../hooks";

export const FormReferences = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { references } = useSelector((state) => state.form);
  const words = useWords();

  return (
    <Card title={words.references}>
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
              placeholder={words.reference}
            />
            <Input
              onChange={handleChange}
              value={values.gsm}
              name="gsm"
              placeholder={words.phone_number}
            />
            <Input
              onChange={handleChange}
              value={values.company}
              name="company"
              placeholder={words.company}
            />
            <Input
              onChange={handleChange}
              value={values.title}
              name="title"
              placeholder={words.reference_title}
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
