import emailjs from "emailjs-com";

export const sendReply = (values) => {
  const params = {
    to_name: values.fname+''+values.lname,
    reply_to: values.email,
    number: values.phone,
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
