import Contact from "@/components/Contact";
import "./styles.css";
import Navbar from "@/components/Navbar";
import Join from "@/components/Join";
import Services from "@/components/Services";
import Copyright from "@/components/Copyright";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
      <Join/>
      <Services/>
      <Copyright/>
    </>
  );
}
