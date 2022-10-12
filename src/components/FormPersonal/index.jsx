import React from "react";
import { Formik, Form, Field, FastField } from "formik";
import {
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  File,
  Button,
} from "../_form";
import styles from "./index.module.css";
import { PersonalSchema } from "../../validations";

export const FormPersonal = () => {
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
          mektup: "",
          description: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
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
              value={values.mektup}
              name="mektup"
              placeholder="Email Address"
            />
            <Textarea
              rows={5}
              onChange={handleChange}
              value={values.description}
              name="description"
              placeholder="Description"
            />
            <Button type="submit" disabled={isSubmitting}>
              ADD
            </Button>
            <Button type="button" onClick={handleReset}>
              CLEAR
            </Button>
          </Form>
        )}
      </Formik>
      {/*  <Formik
        initialValues={{
          name: "",
          surname: "",
          about: "",
          level: "",
          rules: false,
          gender: "1",
          skills: ["php", "css"],
          avatar: false,
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          console.log(actions);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 2000);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="flex">
            <Input name="name" placeholder="Name" autoComplete="none" />
            <Input name="surname" placeholder="Surname" autoComplete="none" />
            <Textarea name="about" placeholder="Description" rows={4} />
            <Select
              label="Cinsiyetiniz"
              name="gender"
              options={[
                { key: "1", value: "Kadın" },
                { key: "2", value: "Erkek" },
              ]}
            />
            <Checkbox label="Kuralları kabul ediyorum" name="rules" />
            <Radio
              label="Seviye"
              name="level"
              options={[
                { key: "beginner", value: "Başlangıç" },
                { key: "jr", value: "Jr. Dev" },
                { key: "sr", value: "Sr. Dev" },
              ]}
            />
            <File label="Avatar Yükle" name="avatar" />
            <Button type="submit" disabled={isSubmitting}>
              Gönder
            </Button>
            <pre>{values.avatar?.name}</pre>
          </Form>
        )}
      </Formik> */}
    </div>
  );
};
