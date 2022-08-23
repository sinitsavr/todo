import * as Yup from "yup";

export const SCHEMA_NAME = Yup.string()
  .max(50, 'Must be 50 symbols or less')
  .required();

export const SCHEMA_ENTER = Yup.object({
  body: SCHEMA_NAME,
});