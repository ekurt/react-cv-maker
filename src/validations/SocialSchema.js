import Yup from "./_validation";

export const SocialSchema = Yup.object().shape({
  github: Yup.string(),
  twitter: Yup.string(),
  linkedin: Yup.string(),
  website: Yup.string(),
});
