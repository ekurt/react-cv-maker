import Yup from "./_validation";

export const CoursesSchema = Yup.object().shape({
  name: Yup.string().required(),
  company: Yup.string().required(),
  description: Yup.string().required(),
  from: Yup.string().required(),
  to: Yup.string().required(),
});
