import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Textarea } from "../_form";
import styles from "./index.module.css";
import { ExperienceSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setExperience } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card, CardDetail, Buttons } from "../";

export const FormExperience = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { experience } = useSelector((state) => state.form);

  return (
    <Card title="Experience">
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
          dispatch(
            setExperience([
              {
                _id: nanoid(),
                ...values,
              },
              ...experience,
            ])
          );
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
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
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setExperience}
              state={experience}
            />
          </Form>
        )}
      </Formik>
      <CardDetail
        data={experience}
        setter={setExperience}
        print={["company", "position"]}
      />
    </Card>
  );
};
