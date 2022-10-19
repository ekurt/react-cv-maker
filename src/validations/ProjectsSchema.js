import Yup from "./_validation";

export const ProjectsSchema = Yup.object().shape({
  name: Yup.string().required(),
  link: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9-_#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Not a valid URL address"
    )
    .required(),
  description: Yup.string(),
});
