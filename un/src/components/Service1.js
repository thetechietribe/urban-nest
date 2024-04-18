import Image from "next/image";
import services from "../../public/Images/Services.webp";

function Service1() {
  return (
    <div className="s-1">
      <div className="left">
        <h1>Our Services</h1>
        <h2>WHAT WE DO</h2>
        <p>
          From concept to completion, our services are designed to support our
          clients and home builders in creating spaces that embody the feeling
          of home.
        </p>
        <div><h6>view work</h6></div>
      </div>
      <div className="right">
        <Image src={services} width={721} height={625} />
      </div>
    </div>
  );
}

export default Service1;
