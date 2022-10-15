import Yup from "./_validation";

export const SkillsSchema = Yup.object().shape({
  name: Yup.string().required(),
  level: Yup.string().required(),
});
