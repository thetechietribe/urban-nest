import "./styles.css";
import Navbar from "@/components/Navbar";
import Join from "@/components/Join";
import Services from "@/components/Services";
import Copyright from "@/components/Copyright";
export default function featuredPage() {
  return (
    <>
      <Navbar />
      <Join />
      <Services />
      <Copyright />
    </>
  );
}
