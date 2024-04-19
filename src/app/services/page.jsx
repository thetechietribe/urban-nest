import "./services.css";
import Navbar from "@/components/Universal/Navbar";
import Service1 from "@/components/Services/Intro";
import Service2 from "@/components/Services/Services";
import Service3 from "@/components/Services/Testimonials";
import Join from "@/components/Universal/Join";
import Services from "@/components/Universal/Services";
import Copyright from "@/components/Universal/Copyright";

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
