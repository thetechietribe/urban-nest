import emailjs from 'emailjs-com';

export const sendEmail = () => {
  emailjs.send('service_a62wvzu', 'template_3akfszj', 'template_8016dud', 'AhBCp-gLoe_SHzp3o')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
}
