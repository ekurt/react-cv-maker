import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Select } from "../_form";
import styles from "./index.module.css";
import { SkillsSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../stores/form";

export const FormSkills = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.form);

  return (
    <div className={styles.skills}>
      <h4>Skills</h4>
      <Formik
        validationSchema={SkillsSchema}
        initialValues={{
          name: "",
          level: 0,
        }}
        onSubmit={(values, actions) => {
          dispatch(setSkills([...skills, { ...values }]));
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.name}
              name="name"
              placeholder="Skill Name"
            />
            <Select
              label="Level"
              name="level"
              options={[
                { key: 1, value: "10 / 100" },
                { key: 2, value: "20 / 100" },
                { key: 3, value: "30 / 100" },
                { key: 4, value: "40 / 100" },
                { key: 5, value: "50 / 100" },
                { key: 6, value: "60 / 100" },
                { key: 7, value: "70 / 100" },
                { key: 8, value: "80 / 100" },
                { key: 9, value: "90 / 100" },
                { key: 10, value: "100 / 100" },
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
              CLEAR FORM
            </Button>
            <Button
              type="button"
              variant="danger"
              onClick={() => {
                handleResetData(setSkills);
              }}
              disabled={skills.length === 0}
            >
              CLEAR DATA
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
