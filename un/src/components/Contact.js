"use client";
import { sendReply } from "@/utils/sendReply";

function Contact() {
  const params = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    msg: "",
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    params.email = formJson.email;
    params.fname = formJson.fname;
    params.lname = formJson.lname;
    params.phone = formJson.phone;
    params.msg = formJson.msg;
    sendReply(params);
  };
  return (
    <div className="contact">
      <div className="con-1">
        <div className="left">
          We would love to learn more about your project and how we can help.
          Please complete our inquiry and click "Send Message". A member of our
          team will be in contact with you within the next 24 hours.
        </div>
        <div className="right">
          <h1>CONTACT US</h1>
          <p>hello@palmerkaydesign.com</p>
          <p>770.487.4455</p>
          <div>
            <h1>OUR STUDIO</h1>
            <p>Monday - Friday / 10am - 5pm</p>
            <p>2004 Commerce Drive North, Suite 100</p>
            <p>Peachtree City, GA 30269</p>
          </div>
        </div>
      </div>
      <div className="con-2">
        <form onSubmit={submitHandler} className="inputs">
          <div className="row row-1">
            <input placeholder="First Name" name="fname"/>
            <input placeholder="Last Name" name="lname"/>
          </div>
          <div className="row row-2">
            <input placeholder="Email" type="email" name="email"/>
            <input placeholder="Phone"  type="tel" name="phone"/>
          </div>
          <div className="row row-4">
            <textarea placeholder="Message" name="msg" />
            <div className="btn-wrapper">
            <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
