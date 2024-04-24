"use client"
import Product from "@/components/Products/ProductDetail";
import Navbar from "@/components/Universal/Navbar";
import { useParams } from "next/navigation";

export default function idPage() {
    const {id} = useParams()

  return (
    <>
      <Navbar />
      <Product num={id} />
    </>
  );
}
