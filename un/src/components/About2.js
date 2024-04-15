import Image from "next/image";
import Founder from "../../public/Images/Founder.webp";

function About2() {
  return (
    <div className="ab-2">
      <div>
        <div className="founder">
          <div className="left">
            <div className="f-title">
              <h1>Angela Palmer</h1>
              <p>OWNER & PRINCIPAL DESIGNER</p>
            </div>
            <p>
              "At Palmer Kay, we believe that interior design is more than just
              creating beautiful spaces. It's about using our expertise to
              enhance the functionality, flow, and overall vibe of a home or
              office. Our passion for design lies in creating spaces that
              reflect the unique personality and style of each client, ensuring
              that the final result is one that truly feels like home. We value
              the relationships with our clients, partners, and the trades, and
              lead with integrity, empathy, and kindness in all that we do."~
              <span>A</span>
            </p>
            <em className="italic">
              Angie started her design journey by honing her skills through
              personal home renovations and decoration, and has been invested in
              delivering high-quality, customized interior design solutions for
              all types of spaces for over a decade.
            </em>
            <div className="pd-20"></div>
            <em>
              A published and award-winning designer, Angie sets the vision and
              guides the team to create the perfect atmosphere for each client's
              unique journey. Together, they are dedicated to collaborating
              closely with clients, from the initial consultation to the final
              reveal, to bring their vision of home to life in the most
              beautiful and functional way.
            </em>
            <div className="pd-20"></div>
            <p>
              Are you ready to begin your design journey? We can't wait to hear
              from you!
            </p>
          </div>
          <div className="right">
            <Image src={Founder} width={430} height={596} />
            <p>
              "My personal style is traditional with a modern edge. However, I
              love the challenge of creating a look that truly speaks to my
              clients, and I'm excited when they embrace color, patterns, and
              wallpaper, even when it's in small doses." ~<span>A</span>
            </p>
          </div>
        </div>
        <div className="designers">
            <div className="designer">
                <Image />
            </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
