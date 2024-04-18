import "./styles.css";
import Navbar from "@/components/Navbar";
import Service1 from "@/components/Service1";
import Service2 from "@/components/Service2";
import Service3 from "@/components/Service3";
import Join from "@/components/Join";
import Services from "@/components/Services";
import Copyright from "@/components/Copyright";

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <Service1 />
      <Service2 />
      <Service3 />
      <Join />
      <Services />
      <Copyright />
    </>
  );
}
