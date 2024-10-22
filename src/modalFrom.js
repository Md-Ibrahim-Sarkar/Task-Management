import * as yup from "yup";


export const schema = yup
  .object({
    title: yup.string().required('kisu likho').min(5).max(25),
    description: yup.string().required(),
    assignedTo: yup.string().required(),
    priority: yup.string().required(),
  })
  .required();
