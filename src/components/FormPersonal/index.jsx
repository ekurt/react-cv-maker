import React from "react";
import { Formik, Form } from "formik";
import { Input, Textarea, File } from "../_form";
import styles from "./index.module.css";
import { PersonalSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setPersonal } from "../../stores/form";
import { Card, Buttons } from "../";
import { useWords } from "../../hooks";

export const FormPersonal = () => {
  const dispatch = useDispatch();
  const { personal } = useSelector((state) => state.form);
  const words = useWords();

  const handleResetData = (setter) => {
    dispatch(setter({}));
  };

  return (
    <Card title={words.personal_information}>
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
              placeholder={words.name_surname}
            />
            <Input
              onChange={handleChange}
              value={values.title}
              name="title"
              placeholder={words.form_title}
            />
            <File label={words.photo} name="photo" />
            <Input
              onChange={handleChange}
              value={values.address}
              name="address"
              placeholder={words.address}
              sizeFull={true}
            />
            <Input
              onChange={handleChange}
              value={values.gsm}
              name="gsm"
              placeholder={words.phone_number}
            />
            <Input
              onChange={handleChange}
              value={values.letter}
              name="letter"
              placeholder={words.email_address}
            />
            <Textarea
              rows={5}
              onChange={handleChange}
              value={values.description}
              name="description"
              placeholder={words.about}
            />
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setPersonal}
              state={personal}
              isArray={false}
            />
          </Form>
        )}
      </Formik>
    </Card>
  );
};
