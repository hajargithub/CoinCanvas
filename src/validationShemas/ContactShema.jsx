import * as validator from "yup";

export const ContactShema = validator.object({
  name: validator.string().required("Name is required"),
  email: validator
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: validator.string().max(25).required("Message is required"),
});
