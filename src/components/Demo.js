import Image from "next/image";
import Demo1 from "../../public/Images/Demo.webp";

function Demo() {
  return (
    <div className="demo">
      <div className="left-col">
        <h1 className="demo-title">finnis lake</h1>
        <h2 className="demo-cat">Luxury custom homes</h2>
        <p className="demo-content">
          Eighteen months of planning and abundant personal touches gave this
          new home a genuine soul and a sense of place.
        </p>
        <div className="demo-socials">
          BE SURE TO FOLLOW US FOR THE ACTION BEHIND THE SCENES!
          <div className="social-btns">
            <div className="social-btn">instagram</div>
            <div className="social-btn">facebook</div>
          </div>
        </div>
      </div>
      <div className="right-col">
        <Image src={Demo1} width={720} height={610} />
      </div>
    </div>
  );
}

export default Demo;
