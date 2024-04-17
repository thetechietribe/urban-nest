import emailjs from "emailjs-com";

export const sendReply = (values) => {
  const params = {
    first_name: values.fname,
    last_name: values.lname,
    email: values.email,
    number: values.phone,
    org: "Urban Nest",
    message: values.msg,
  };
  emailjs
    .send("service_a62wvzu", "template_8016dud", params, "AhBCp-gLoe_SHzp3o")
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
