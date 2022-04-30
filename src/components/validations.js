import * as yup from "yup";

const validations = yup.object().shape({
    email:yup
        .string()
        .email("this is not an email adress.")
        .required("Zorunlu alan."),
    password:yup
        .string()
        .min(5,"write more than 5 character broo")
        .required("Zorunlu alan."),
});
export default validations;