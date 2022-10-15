import Yup from "./_validation";

export const ReferencesSchema = Yup.object().shape({
  name: Yup.string().required(),
  company: Yup.string().required(),
  gsm: Yup.number().required(),
  title: Yup.string().required(),
});
