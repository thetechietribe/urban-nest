"use client"
import Product from "@/components/Products/ProductDetail";
import Services from "@/components/Universal/Services";
import Join from "@/components/Universal/Join";
import Navbar from "@/components/Universal/Navbar";
import { useParams } from "next/navigation";
import Copyright from "@/components/Universal/Copyright";

export default function idPage() {
    const {id} = useParams()

  return (
    <>
      <Navbar />
      <Product num={id} />
      <Join/>
      <Services/>
      <Copyright/>
    </>
  );
}
