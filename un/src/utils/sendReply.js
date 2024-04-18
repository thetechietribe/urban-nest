import emailjs from "emailjs-com";

export const sendReply = (values) => {
  const params = {
    from_name: "TechieTribe",
    to_name: values.fname+''+values.lname,
    reply_to: values.email,
    number: values.phone,
    message: values.msg,
  };
  emailjs
    .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_AUTO_REPLY_TEMPLATE_ID, params, process.env.NEXT_PUBLIC_KEY)
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
