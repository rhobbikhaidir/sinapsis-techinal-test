import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string().required("username is required"),
  token: Yup.string().required("token is required"),
});
