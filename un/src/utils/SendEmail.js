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
    .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, params, process.env.NEXT_PUBLIC_KEY)
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
