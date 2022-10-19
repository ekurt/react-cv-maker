import React from "react";
import { Formik, Form } from "formik";
import { Input, Button } from "../_form";
import styles from "./index.module.css";
import { SocialSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setSocial } from "../../stores/form";

export const FormSocial = () => {
  const dispatch = useDispatch();
  const { social } = useSelector((state) => state.form);

  return (
    <div className={styles.social}>
      <h4>Social</h4>
      <Formik
        validationSchema={SocialSchema}
        initialValues={{
          twitter: "",
          github: "",
          linkedin: "",
          website: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(setSocial([{ ...values }, ...social]));
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.twitter}
              name="twitter"
              placeholder="Twitter Username"
            />
            <Input
              onChange={handleChange}
              value={values.github}
              name="github"
              placeholder="Github Username"
            />
            <Input
              onChange={handleChange}
              value={values.linkedin}
              name="linkedin"
              placeholder="LinkedIn Username"
            />
            <Input
              onChange={handleChange}
              value={values.website}
              name="website"
              placeholder="Website URL"
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
