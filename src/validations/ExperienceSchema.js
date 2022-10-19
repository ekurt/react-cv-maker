import Yup from "./_validation";

export const ExperienceSchema = Yup.object().shape({
  company: Yup.string().required(),
  position: Yup.string().required(),
  city: Yup.string().required(),
  description: Yup.string(),
  from: Yup.string().required(),
  to: Yup.string().required(),
});
