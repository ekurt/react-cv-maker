import Yup from "./_validation";

export const EducationSchema = Yup.object().shape({
  school: Yup.string().required(),
  subject: Yup.string().required(),
  city: Yup.string().required(),
  degree: Yup.string(),
  from: Yup.string().required(),
  to: Yup.string().required(),
});
