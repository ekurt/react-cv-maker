import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Select } from "../_form";
import styles from "./index.module.css";
import { SocialSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setSocial } from "../../stores/form";
import { nanoid } from "nanoid";

export const FormSocial = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { social } = useSelector((state) => state.form);

  return (
    <div className={styles.social}>
      <h4>Social</h4>
      <Formik
        validationSchema={SocialSchema}
        initialValues={{
          _id: nanoid(),
          name: "",
          link: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(setSocial([...social, { ...values }]));
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Select
              label="Type"
              name="name"
              options={[
                { key: "Twitter", value: "Twitter Username" },
                { key: "Github", value: "Github Username" },
                { key: "LinkedIn", value: "LinkedIn Username" },
                { key: "Website", value: "Personal Website" },
                { key: "URL", value: "External URL" },
              ]}
            />
            <Input
              onChange={handleChange}
              value={values.link}
              name="link"
              placeholder="Username or URL Address"
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
                handleResetData(setSocial);
              }}
              disabled={social.length === 0}
            >
              CLEAR DATA
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
