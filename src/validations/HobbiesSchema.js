import Yup from "./_validation";

export const HobbiesSchema = Yup.object().shape({
  name: Yup.string().required(),
});
