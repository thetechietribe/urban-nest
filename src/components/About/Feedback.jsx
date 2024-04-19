"use client";
import Image from "next/image";
import cl from "../../../public/Images/ClientLove.webp";

export default function Feedback() {
  return (
    <div className="ab-3">
      <Image src={cl} width={721} height={646} />
      <div className="client">
        <h1>Client Love</h1>
        <div>
          <p>
            "Working with Angie has been a pleasure. I can't stop looking at the
            window treatments she helped us choose. They make such a
            difference."
          </p>
          <h3>Toni   /   Custom Window Treatments</h3>
        </div>
      </div>
    </div>
  );
}
