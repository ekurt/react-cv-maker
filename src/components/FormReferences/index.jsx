import React from "react";
import { Formik, Form } from "formik";
import { Input, Button } from "../_form";
import styles from "./index.module.css";
import { ReferencesSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setReferences } from "../../stores/form";

export const FormReferences = () => {
  const dispatch = useDispatch();
  const { references } = useSelector((state) => state.form);

  return (
    <div className={styles.references}>
      <h4>References</h4>
      <Formik
        validationSchema={ReferencesSchema}
        initialValues={{
          name: "",
          title: "",
          gsm: "",
          company: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(setReferences([...references, { ...values }]));
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values }) => (
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
