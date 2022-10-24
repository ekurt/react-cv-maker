import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Select } from "../_form";
import styles from "./index.module.css";
import { LanguageSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setLanguages } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card, CardDetail } from "../";

export const FormLanguage = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { languages } = useSelector((state) => state.form);

  return (
    <Card title="Languages">
      <Formik
        validationSchema={LanguageSchema}
        initialValues={{
          name: "",
          level: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setLanguages([
              ...languages,
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
            <Button type="submit" variant="info" disabled={!dirty}>
              ADD
            </Button>
            <Button
              type="reset"
              variant="danger"
              onClick={handleReset}
              disabled={!dirty}
            >
              CLEAR
            </Button>
            <Button
              type="button"
              variant="danger"
              onClick={() => {
                handleResetData(setLanguages);
              }}
              disabled={languages.length === 0}
            >
              CLEAR DATA
            </Button>
          </Form>
        )}
      </Formik>
      <CardDetail
        data={languages}
        setter={setLanguages}
        print={["name", "level"]}
      />
    </Card>
  );
};
