import Image from "next/image";
import Founder from "../../../public/Images/Founder.webp";
import Des1 from "../../../public/Images/Des1.webp";
import Des2 from "../../../public/Images/Des2.webp";
import Des3 from "../../../public/Images/Des3.webp";
import { Container } from "@mui/material";

export default function Staff() {
  return (
    <div className="ab-2">
      <Container>
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
            <Image src={Des1} width={242} height={339} />
            <h1>Courtney Eidson</h1>
            <h6>DESIGNER</h6>
            <p>
              Courtney is an artist in her own right and applies her artistic
              sensibility towards creating design solutions tailored to each
              client's unique needs and vision. Her education includes an
              interesting blend of biology, chemistry, and art, including a year
              abroad in Cortona, Italy studying the masters. Her use of texture,
              color and light creates spaces that are livable, inviting, and
              infused with personal touches.
            </p>
          </div>
          <div className="designer">
            <Image src={Des2} width={242} height={339} />
            <h1>Emilie Morrison</h1>
            <h6>DESIGNER</h6>
            <p>
              Emilie honed her ability to combine colors and textures in
              stunning combinations through her experience at ADAC and in visual
              merchandising for two of the top home retail brands in the
              country. She brings her education in merchandising and textiles to
              each project to ensure a well-rounded combination of fabrics and
              design elements. Whether modern or traditional, she strives to
              design inspiring interiors that are not only beautiful, but
              functional and comfortable
            </p>
          </div>
          <div className="designer">
            <Image src={Des3} width={242} height={339} />
            <h1>Brittany Hunt</h1>
            <h6>DESIGNER</h6>
            <p>
              Brittany decided on a career change from nutrition to pursue her
              passion for interior design. With a combination of education in
              biology, chemistry, and interiors, Brittany brings a unique
              perspective to her projects. She has previous experience in retail
              design services and working for a luxury residential staging firm.
              Brittany is our expert in 3D renderings helping clients see their
              design come to life through visualizations and precise technical
              plans.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}