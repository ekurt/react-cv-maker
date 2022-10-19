import Yup from "./_validation";

export const SocialSchema = Yup.object().shape({
  name: Yup.string().required(),
  link: Yup.string().required(),
});
