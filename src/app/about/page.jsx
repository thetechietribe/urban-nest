import "./about.css";
import Navbar from "@/components/Universal/Navbar";
import Mission from "../../components/About/Mission";
import Staff from "../../components/About/Staff";
import Feedback from "../../components/About/Feedback";
import Qualities from "../../components/About/Qualities";
import Features from "../../components/About/Features";
import Join from "@/components/Universal/Join";
import Services from "@/components/Universal/Services";
import Copyright from "@/components/Universal/Copyright";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Mission />
      <Staff />
      <Feedback />
      <Qualities />
      <Features />
      <Join />
      <Services />
      <Copyright />
    </>
  );
}
