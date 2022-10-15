import React from "react";
import { Formik, Form } from "formik";
import { Input, Button } from "../_form";
import styles from "./index.module.css";
import { HobbiesSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setHobbies } from "../../stores/form";

export const FormHobbies = () => {
  const dispatch = useDispatch();
  const { hobbies } = useSelector((state) => state.form);

  return (
    <div className={styles.hobby}>
      <h4>Hobbies</h4>
      <Formik
        validationSchema={HobbiesSchema}
        initialValues={{
          name: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(setHobbies([...hobbies, values.name]));
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.name}
              name="name"
              placeholder="Hobby"
              sizeFull={true}
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
