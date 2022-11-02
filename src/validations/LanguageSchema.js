import Yup from "./_validation";

export const LanguageSchema = Yup.object().shape({
  name: Yup.string().required(),
  level: Yup.string().required(),
});
