import React from "react";
import { Formik, Form } from "formik";
import { Input, Textarea, File, Button } from "../_form";
import styles from "./index.module.css";
import { PersonalSchema } from "../../validations";
import { useDispatch } from "react-redux";
import { setPersonal } from "../../stores/form";

export const FormPersonal = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.personal}>
      <h4>Personal Information</h4>
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
        onSubmit={(values, actions) => {
          dispatch(
            setPersonal({ ...values, photo: URL.createObjectURL(values.photo) })
          );
          actions.resetForm();
        }}
      >
        {({
          handleSubmit,
          handleReset,
          handleChange,
          values,
          isSubmitting,
        }) => (
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
            <Button type="submit" variant="info" disabled={isSubmitting}>
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
