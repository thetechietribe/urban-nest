import Image from "next/image";
import Interior from "../../../public/Images/Interior.webp";

export default function Testimonials() {
  return (
    <div className="s-3">
      <Image src={Interior} width={720} height={978} />
      <div>
        <h1>Hear from a few of our clients.... are you ready?</h1>
        <div className="gs">
          <h4>get started</h4>
        </div>
        <p>LUXURY HOME BUILD & INTERIORS CLIENTS</p>
        <div className="m20"></div>
        <em>
          Working with Angie to pull the design for our new home together was a
          pleasure. She has a keen eye for detail and listened to our vision
          while still pushing us out of our comfort zone at times. We also
          appreciated how she incorporated almost all of our existing
          furnishings while adding some select new things. - Scott
        </em>
        <div className="m20"></div>
        <em>
          We used Palmer Kay Design during the construction of our custom home.
          They helped us from top to bottom. They were organized, professional
          and made us feel very at ease during the long build process. They
          created beautiful spaces that feel 100% like us. - Diane
        </em>
        <div className="m20"></div>
        <p>WHOLE HOME INTERIOR TRANSFORMATION CLIENT</p>
        <div className="m20"></div>
        <em>
          Angie, it has been our pleasure to work with you for the last six
          months. We are both just speechless! Our home is exquisite due to your
          design genius, and your organizational skills. You really expanded our
          horizons on letting go and embracing new ideas. The morning after our
          fun reveal, we woke up to the most beautiful home we have ever seen.
          We would recommend you and your team very highly! Thank you! - Don and
          Elaine
        </em>
      </div>
    </div>
  );
}
