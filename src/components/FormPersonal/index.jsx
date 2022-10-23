import React from "react";
import { Formik, Form } from "formik";
import { Input, Textarea, File, Button } from "../_form";
import styles from "./index.module.css";
import { PersonalSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setPersonal } from "../../stores/form";
import { Card } from "../";

export const FormPersonal = () => {
  const dispatch = useDispatch();
  const { personal } = useSelector((state) => state.form);

  const handleResetData = (setter) => {
    dispatch(setter({}));
  };

  return (
    <Card title="Personal Information">
      <Formik
        validationSchema={PersonalSchema}
        initialValues={{
          nameSurname: "",
          title: "",
          photo: "",
          address: "",
          gsm: "",
          letter: "",
          description: "",
        }}
        onSubmit={(values) => {
          dispatch(
            setPersonal({
              ...values,
              photo: values.photo ? URL.createObjectURL(values.photo) : "",
            })
          );
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.nameSurname}
              name="nameSurname"
              placeholder="Name Surname"
            />
            <Input
              onChange={handleChange}
              value={values.title}
              name="title"
              placeholder="Title"
            />
            <File label="Photo" name="photo" />
            <Input
              onChange={handleChange}
              value={values.address}
              name="address"
              placeholder="Address"
              sizeFull={true}
            />
            <Input
              onChange={handleChange}
              value={values.gsm}
              name="gsm"
              placeholder="Phone Number"
            />
            <Input
              onChange={handleChange}
              value={values.letter}
              name="letter"
              placeholder="Email Address"
            />
            <Textarea
              rows={5}
              onChange={handleChange}
              value={values.description}
              name="description"
              placeholder="Description"
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
                handleResetData(setPersonal);
              }}
              disabled={Object.keys(personal).length === 0}
            >
              CLEAR DATA
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
