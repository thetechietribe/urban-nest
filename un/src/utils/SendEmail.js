import emailjs from "emailjs-com";

export const sendEmail = (values) => {
  const params = {
    first_name: values.fname,
    last_name: values.lname,
    email: values.email,
    number: "",
    org: "Urban Nest",
    message: "",
  };
  emailjs
    .send("service_a62wvzu", "template_3akfszj", params, "AhBCp-gLoe_SHzp3o")
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
