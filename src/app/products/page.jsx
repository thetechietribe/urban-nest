import "./products.css";
import Navbar from "@/components/Universal/Navbar";
import Join from "@/components/Universal/Join";
import Services from "@/components/Universal/Services";
import Copyright from "@/components/Universal/Copyright";
import Products from "@/components/Products/Products"
export default function featuredPage() {
  return (
    <>
      <Navbar />
      <Products />
      <Join />
      <Services />
      <Copyright />
    </>
  );
}
