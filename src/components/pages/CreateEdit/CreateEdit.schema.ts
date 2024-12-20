import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string().required("username is required"),
  body: Yup.string().required("token is required"),
});
