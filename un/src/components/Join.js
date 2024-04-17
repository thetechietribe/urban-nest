"use client";
import { sendEmail } from "@/utils/SendEmail";

function Join() {
  const params = {
    fname: "",
    lname: "",
    email: "",
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    params.email = formJson.email;
    params.fname = formJson.fname;
    params.lname = formJson.lname;
    sendEmail(params);
  };
  return (
    <div className="join">
      <p className="j-title">Urban Nest</p>
      <p className="fancy">    bringing your     vision of home to life</p>
      <form onSubmit={submitHandler} className="j-content">
        <h1>join the list</h1>
        <div className="j-inputs">
          <input
            type="text"
            name="email"
            className="j-inp"
            placeholder="Your Email"
          />
          <input
            type="text"
            name="fname"
            className="j-inp"
            placeholder="First name"
          />
          <input
            type="text"
            name="lname"
            className="j-inp"
            placeholder="Last name"
          />
        </div>
        <button type="submit" className="subscribe">
          subscribe
        </button>
      </form>
    </div>
  );
}

export default Join;
