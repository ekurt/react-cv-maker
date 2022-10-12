import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "This field is a required field",
    notType: "This field must be a ${type}",
  },
  string: {
    min: "This field must be at least ${min} characters",
    max: "This field must be at most ${max} characters",
    email: "Not a valid email address",
  },
});

export default Yup;
