import React from "react";
import { Formik, Form } from "formik";
import { Input } from "../_form";
import styles from "./index.module.css";
import { HobbiesSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setHobbies } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card, CardDetail, Buttons } from "../";
import { useWords } from "../../hooks";

export const FormHobbies = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { hobbies } = useSelector((state) => state.form);
  const words = useWords();

  return (
    <Card title={words.hobbies}>
      <Formik
        validationSchema={HobbiesSchema}
        initialValues={{
          name: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setHobbies([
              ...hobbies,
              {
                _id: nanoid(),
                name: values.name,
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
              placeholder={words.hobby}
              sizeFull={true}
            />
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setHobbies}
              state={hobbies}
            />
          </Form>
        )}
      </Formik>
      <CardDetail data={hobbies} setter={setHobbies} print={["name"]} />
    </Card>
  );
};
