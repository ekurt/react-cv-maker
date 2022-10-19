import Yup from "./_validation";

export const CoursesSchema = Yup.object().shape({
  name: Yup.string().required(),
  company: Yup.string(),
  description: Yup.string(),
  from: Yup.string(),
  to: Yup.string(),
});
