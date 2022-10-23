import React from "react";
import { Formik, Form } from "formik";
import { Input, Button } from "../_form";
import styles from "./index.module.css";
import { EducationSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card, CardDetail } from "../";

export const FormEducation = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { education } = useSelector((state) => state.form);

  return (
    <Card title="Education">
      <Formik
        validationSchema={EducationSchema}
        initialValues={{
          school: "",
          subject: "",
          city: "",
          degree: "",
          from: "",
          to: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setEducation([
              {
                _id: nanoid(),
                ...values,
              },
              ...education,
            ])
          );
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.school}
              name="school"
              placeholder="School Name"
            />
            <Input
              onChange={handleChange}
              value={values.subject}
              name="subject"
              placeholder="Subject"
            />
            <Input
              onChange={handleChange}
              value={values.degree}
              name="degree"
              placeholder="Degree"
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
                handleResetData(setEducation);
              }}
              disabled={education.length === 0}
            >
              CLEAR DATA
            </Button>
          </Form>
        )}
      </Formik>
      <CardDetail
        data={education}
        setter={setEducation}
        print={["school", "subject"]}
      />
    </Card>
  );
};
