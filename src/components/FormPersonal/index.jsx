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
          nameSurname: "Emre Kurt",
          title: "Front-End Web Developer",
          photo: "",
          address: "Antalya / Turkey",
          gsm: "5345244208",
          letter: "hi@ekurt.dev",
          description:
            "Eğitim hayatım ve tecrübelerim doğrultusunda farklı insanlarla birlikte çalışma, bir takımda yer alma ve birlikte üretebilmeyi öğrenme fırsatım oldu. Bu nedenle takımınıza kolaylıkla adapte olacağımı düşünüyorum. İşini severek yapan ve detayları çok önemseyen biriyim. İnsan ilişkileri noktasında esnek olmanın bana verimlilik olarak geri döndüğünü sıklıkla tecrübe ettim. Yeni şeyler öğrenmeyi, yeteneklerimi geliştirmeyi çok önemsiyor; bu amaçla insan ilişkilerinin öğreticiliğinden faydalanmak gerektiğini düşünüyorum. Ekibimdeki insanlarla bilgi alışverişinde bulunmak benim için bu nedenle çok önemlidir. Fikir geliştirmenin zihni, dolayısıyla bedeni sürekli aktif tuttuğunun bilincinde olarak hem iş hem de bireysel hayatta yaratıcı olmanın önemli olduğunu düşünüyorum ve yaratıcılığım ile size katkı sağlayacağıma inanıyorum.",
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
