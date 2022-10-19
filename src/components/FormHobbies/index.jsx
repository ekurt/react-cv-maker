import React from "react";
import { Formik, Form } from "formik";
import { Input, Button } from "../_form";
import styles from "./index.module.css";
import { HobbiesSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setHobbies } from "../../stores/form";

export const FormHobbies = ({ handleResetData }) => {
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
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.name}
              name="name"
              placeholder="Hobby"
              sizeFull={true}
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
                handleResetData(setHobbies);
              }}
              disabled={hobbies.length === 0}
            >
              CLEAR DATA
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
