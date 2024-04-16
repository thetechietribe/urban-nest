import Image from "next/image";
import ft from "../../public/Images/Features.webp";
import ins from "../../public/Images/Inspired.webp";
export default function About5() {
  return (
    <div className="ab-5">
      <div>
        <Image src={ft} width={582} height={650} />
        <h6>Latest Features</h6>
        <p>read more</p>
      </div>
      <div>
        <Image src={ins} width={582} height={650} />
        <h6>Stay Inspired</h6>
        <p>our community</p>
      </div>
    </div>
  );
}
