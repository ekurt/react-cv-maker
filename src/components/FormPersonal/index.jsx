import React from "react";
import { Formik, Form } from "formik";
import { Input, Textarea, File, Button } from "../_form";
import styles from "./index.module.css";
import { PersonalSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setPersonal } from "../../stores/form";

export const FormPersonal = () => {
  const dispatch = useDispatch();
  const { personal } = useSelector((state) => state.form);

  return (
    <div className={styles.personal}>
      <h4>Personal Information</h4>
      <Formik
        validationSchema={PersonalSchema}
        initialValues={{
          nameSurname: "asdasdasd",
          title: "asdasdasda",
          photo: {},
          address: "asdasd",
          gsm: "123123123",
          mektup: "asdasda@msn.cn",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam, quod ratione accusamus ducimus soluta cumque numquam eaque, delectus fugit ea quam fugiat necessitatibus doloribus quis? Culpa omnis beatae tenetur.",
        }}
        onSubmit={(values) => {
          dispatch(
            setPersonal({ ...values, photo: URL.createObjectURL(values.photo) })
          );
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
      <div className="w-100 overflow-hidden">
        <pre>{JSON.stringify(personal, null, 2)}</pre>
        <img src={personal.photo} alt="" />
      </div>
    </div>
  );
};
