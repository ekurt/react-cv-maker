import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Select } from "../_form";
import styles from "./index.module.css";
import { LanguageSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setLanguages } from "../../stores/form";

export const FormLanguage = () => {
  const dispatch = useDispatch();
  const { languages } = useSelector((state) => state.form);

  return (
    <div className={styles.language}>
      <h4>Languages</h4>
      <Formik
        validationSchema={LanguageSchema}
        initialValues={{
          name: "",
          level: {},
        }}
        onSubmit={(values, actions) => {
          dispatch(setLanguages([...languages, { ...values }]));
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.name}
              name="name"
              placeholder="Language"
            />
            <Select
              label="Level"
              name="level"
              options={[
                { key: "A1", value: "A1" },
                { key: "A2", value: "A2" },
                { key: "B1", value: "B1" },
                { key: "B2", value: "B2" },
                { key: "C1", value: "C1" },
                { key: "C2", value: "C2" },
              ]}
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
