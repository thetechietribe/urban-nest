import "./contact.css";
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Universal/Navbar";
import Join from "@/components/Universal/Join";
import Services from "@/components/Universal/Services";
import Copyright from "@/components/Universal/Copyright";

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
