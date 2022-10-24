import Yup from "./_validation";

const FILE_SIZE = 5 * 1048576;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

export const PersonalSchema = Yup.object().shape({
  nameSurname: Yup.string().required(),
  title: Yup.string().required(),
  description: Yup.string(),
  address: Yup.string(),
  gsm: Yup.number(),
  letter: Yup.string().email().required(),
  photo: Yup.mixed()
    /* .test({
      message: "This field is a required field",
      test: (file) => file?.name,
    }) */
    /* .test(
      "fileFormat",
      "You can only upload photo in `jpeg`, `jpg` and `png` formats",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ) */
   /*  .test(
      "fileSize",
      "Photo size must be less than 5MB",
      (value) => value && value.size <= FILE_SIZE
    ), */
});
