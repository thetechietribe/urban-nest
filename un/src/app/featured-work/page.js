import "./styles.css";
import Navbar from "@/components/Navbar";
import Join from "@/components/Join";
import Services from "@/components/Services";
import Copyright from "@/components/Copyright";
import Feature1 from "@/components/Feature1";
import Image1 from "../../../public/Images/Image1.webp";
import Image2 from "../../../public/Images/Image2.webp";
import Image3 from "../../../public/Images/Image3.webp";
import Image4 from "../../../public/Images/Image4.webp";
import Image5 from "../../../public/Images/Image5.webp";
import Features from "../../../public/Images/Features.webp";
import Interior from "../../../public/Images/Interior.webp";
import Image from "next/image";
export default function featuredPage() {
  return (
    <>
      <Navbar />
      <Feature1
        src1={Image1}
        src2={Image2}
        src3={Image3}
        name1={"Whitewater Creek Modern"}
        name2={"Finnis Lake"}
        name3={"Hawks Rise"}
      />
      <Feature1
        src1={Image4}
        src2={Image5}
        src3={Features}
        name1={"The Peninsula"}
        name2={"The Modern Belgian"}
        name3={"Northgate"}
      />
      <div className="f-1">
        <div>
        <Image src={Interior} title="Swiss Expansion" width={350} height={500} />
        <h1>Swiss Expansion</h1>
        </div>
      </div>
      <Join />
      <Services />
      <Copyright />
    </>
  );
}
