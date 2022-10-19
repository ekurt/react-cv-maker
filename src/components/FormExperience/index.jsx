import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Textarea } from "../_form";
import styles from "./index.module.css";
import { ExperienceSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setExperience } from "../../stores/form";

export const FormExperience = () => {
  const dispatch = useDispatch();
  const { experience } = useSelector((state) => state.form);

  return (
    <div className={styles.experience}>
      <h4>Experience</h4>
      <Formik
        validationSchema={ExperienceSchema}
        initialValues={{
          company: "",
          position: "",
          city: "",
          description: "",
          from: "",
          to: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(setExperience([...experience, { ...values }]));
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.company}
              name="company"
              placeholder="Company Name"
              sizeFull={true}
            />
            <Input
              onChange={handleChange}
              value={values.position}
              name="position"
              placeholder="Position"
            />
            <Input
              onChange={handleChange}
              value={values.city}
              name="city"
              placeholder="City"
            />
            <Input
              onChange={handleChange}
              value={values.from}
              name="from"
              placeholder="From"
            />
            <Input
              onChange={handleChange}
              value={values.to}
              name="to"
              placeholder="To"
            />
            <Textarea
              rows={3}
              onChange={handleChange}
              value={values.description}
              name="description"
              placeholder="Description"
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
