import * as yup from "yup";


const schema = yup.object().shape({
  name: yup.string().trim().required("Name is required").min(3, "Needs to be at least 3 characters."),
  email: yup.string().trim().email().required("Email is required"),
  password: yup
    .string() 
    .required("Password required")
    .min(6, "Needs to be at least 6 characters.")
    .trim(),
  term: yup.boolean().oneOf([true], "You must accept the Terms and Conditions"),
});

// schema
// .isValid({
//   name: "Nyriq",
//   email: "riqthedev@gmail.com",
//   password: "abcdefghi",
//   term: true,
// })


export default schema