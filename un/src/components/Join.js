import { sendEmail } from "@/utils/SendEmail";

function Join() {
  return (
    <div className="join">
      <p className="j-title">Urban Nest</p>
      <p className="fancy">    bringing your     vision of home to life</p>
      <div className="j-content">
        <h1>join the list</h1>
        <div className="j-inputs">
          <input type="text" className="j-inp" placeholder="Your Email" />
          <input type="text" className="j-inp" placeholder="First name" />
          <input type="text" className="j-inp" placeholder="Last name" />
        </div>
        <button
          className="subscribe"
          onClick={sendEmail({
            name: "Abdul Rehman",
            email: "aarehman945@gmail.com",
            message: "It Worked lol.",
          })}
        >
          subscribe
        </button>
      </div>
    </div>
  );
}

export default Join;
