import React from "react";
import { Formik, Form } from "formik";
import { Input, Select } from "../_form";
import styles from "./index.module.css";
import { SocialSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setSocial } from "../../stores/form";
import { nanoid } from "nanoid";
import { Card, CardDetail, Buttons } from "../";
import { useWords } from "../../hooks";

export const FormSocial = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { social } = useSelector((state) => state.form);
  const words = useWords();

  return (
    <Card title={words.social}>
      <Formik
        validationSchema={SocialSchema}
        initialValues={{
          name: "",
          link: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setSocial([
              ...social,
              {
                _id: nanoid(),
                ...values,
              },
            ])
          );
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Select
              label="Type"
              name="name"
              options={[
                { key: "Twitter", value: words.twitter_username },
                { key: "Github", value: words.github_username },
                { key: "LinkedIn", value: words.linkedin_username },
                { key: "Website", value: words.personal_website },
                { key: "URL", value: words.external_url },
              ]}
            />
            <Input
              onChange={handleChange}
              value={values.link}
              name="link"
              placeholder={words.username_or_url}
            />
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setSocial}
              state={social}
            />
          </Form>
        )}
      </Formik>
      <CardDetail data={social} setter={setSocial} print={["name", "link"]} />
    </Card>
  );
};
