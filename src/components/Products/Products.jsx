"use client";
// import React, { useRef, useState } from "react";

import Prod1 from "../../../public/Images/Products/Product1.jpeg";
import Prod2 from "../../../public/Images/Products/Product2.jpeg";
import Prod3 from "../../../public/Images/Products/Product3.jpeg";
import Prod4 from "../../../public/Images/Products/Product4.jpeg";
import Prod5 from "../../../public/Images/Products/Product5.jpeg";
import Prod6 from "../../../public/Images/Products/Product6.jpeg";
import Prod7 from "../../../public/Images/Products/Product7.jpeg";
import Prod8 from "../../../public/Images/Products/Product8.jpeg";
import Prod9 from "../../../public/Images/Products/Product9.jpeg";
import Prod10 from "../../../public/Images/Products/Product10.jpg";
// import { Box, Container, Grid } from "@mui/material";
// import Image from "next/image";
// export default function Products() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const handleHover = (key) => {
//     setHoveredIndex(key);
//     console.log("OK");
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };
//   const ProductData = [
//     {
//       icon: Prod1,
//       name: "Renimer BK11 Wireless Earbuds",
//       desc: "Bluetooth 5.3, One-Step Pairing, Professional Audio, Comfortable, 40 Hrs Playtime, 4 ENC Mics, Fast Charging, LED Battery Display, Sensitive Touch, IP7 Waterproof, Universal Compatibility, Type-C ChargingBluetooth 5.3, One-Step Pairing, Professional Audio, Comfortable, 40 Hrs Playtime,4 ENC Mics, Fast Charging, LED Battery Display, Sensitive Touc… See more",
//     },
//     {
//       icon: Prod2,
//       name: "INIU USB C Charger Cable 2m 3.1A Type C Cable Fast Charging",
//       desc: "INIU - The SAFE Fast Charging Professional Experience the safest charging with over 38 million global users. At INIU, we only use the highest quality materials, so we have the confidence to provide industry-leading 3 year warranty.Fast Charge 3.1A Designed with advanced Super Conductivity copper cables for reliable high speed of 3.1A Fully support fast charging QC 3.0 to incredibly revitalize your phone up to 93% in 1 hour.",
//     },
//     {
//       icon: Prod3,
//       name: "Moobesthy Wireless Headphones Over Ear, Bluetooth Headphones",
//       desc: "Bluetooth 5.0 & Built-in Microphone  Wireless Headphones Over Ear Built in two 40mm large bezel driver units and Bluetooth 5.0 technology, our bluetooth headphones with microphone can offer more stable transmission speed, lower latency and better audio output,which give you wonderful music enjoyment. And built-in microphone of our lightweight headphones enables a hands-free clear phone communication, which like talking face to face with your families and friends.",
//     },
//     {
//       icon: Prod4,
//       name: "RIENOK Bluetooth Speaker Portable Wireless Bluetooth Speaker",
//       desc: "HD Stereo Extra Bass: The wireless bluetooth speaker equips with 30W high power full frequency drivers speaker and an advanced digital signal processor to ensure a high-fidelity sound system. Extra bass button to enhance the bass effect",
//     },
//     {
//       icon: Prod5,
//       name: "Wireless Charger, 3 in 1 Charging Station",
//       desc: "3 in 1 Wireless Charging Station with Adapter  Experience the convenience of charging up to 3 for your devices simultaneously, your phone, AirPods, and iWatch. Our fast wireless charger provides fast charging at 15W for your iPhone, 5W for AirPods, and 3W for your Apple Watch.Equipped with updated 25W USB-C Plug and 1-meter cable allow for rapid single-device charging for the iPhone 15 series, save your money. With a 1-meter cable, you can kiss distance-related charging woes goodbye.",
//     },
//     {
//       icon: Prod6,
//       name: "USB C HUB, Multiport USB C Adapter for Macbook Pro & Air Accessories",
//       desc: "Multifunctional 6-in-1 Hub]: SZPACMATE USB C Hub has 4K @ 30Hz HDMI, USB 3.0 & 2.0, SD / TF card reader. The USB-C hub adapter is compatible with all devices with a Type-C / USB-C full-function interface connection, especially for Macbook Pro and Air. In addition, the USB-C HUB is small and very easy to carry, so You can solve the problem of a single laptop interface anytime, anywhere.",
//     },
//     {
//       icon: Prod7,
//       name: "Wireless Mouse for Laptop With 2 USB A to USB C Adapter",
//       desc: "WIRELESS & BLUETOOTH: Usb mouse wireless is equipped with 2.4GHz wireless technology which provides an ultra-stable connection, allowing for zero delay between your actions. Furthermore, this technology increases the working distance is 10m. the compact design of the product is highly comfortable and helps to alleviate any tension or discomfort in your fingers and wrist.",
//     },
//     {
//       icon: Prod8,
//       name: "Yizhet 1 pair Round Ear Pads 75mm Universal Replacement Earpads",
//       desc: "Universal 75mm round ear pads. Note: There is an error of 1-3mm due to manual measurement, please check your headset size before buying.",
//     },
//     {
//       icon: Prod9,
//       name: "Betron 500ml Screen Cleaner for TV, Monitor, Laptop,LED, LCD, Tablet, Smartphone, Camera Lens, Cleaning Kit Includes Microfibre Cloths and Cleaning Brush",
//       desc: "Betron's comprehensive 500ml screen cleaning kit is designed to provide a thorough cleaning experience for all your electronic devices; it includes two microfiber cloths and a soft brush to ensure every part of your screen is spotless",
//     },
//     {
//       icon: Prod10,
//       name: "Under Cabinet Kitchen Lights, 146 LED Motion Sensor Lights Indoor",
//       desc: "146 LED Super Bright & Eyes-caring The under cupboard kitchen lights contain 146 LEDs. Compared with traditional cupboard lights, the lamp beads of our lights are hidden on both sides of the lamp body and are invisible, avoiding the light directly irritating your eyes. The under cabinet kitchen lights produce softer, brighter, and more natural light.",
//     },
//   ];
//   return (
//     <div
//     className="products-wrapper"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr 1fr",
//         margin: "0 10%",
//         position: "relative",
//       }}
//     >
//       {ProductData.map((product, key) => (
//         <div
//           key={key}
//           onMouseEnter={() => handleHover(key)}
//           onMouseLeave={handleMouseLeave}
//           style={{
//             margin: "100px 20px",
//             alignItems: "center",
//             textAlign: "center",
//             display:"flex",
//             flexDirection:"column"
//           }}
//         >
//           {hoveredIndex === key ? (
//             <>
//               <Image
//                 height={400}
//                 width={300}
//                 src={product.icon}
//                 style={{ objectFit: "fill" }}
//               />
//               <div style={{ position: "relative",height:"400px",width:"300px",background:"#000000D0",top:"-300px",color:"white",marginBottom:"-300px",transition:"all .5s" }}>
//                 <p
//                   style={{
//                     margin:"auto",
//                     marginTop: "24px",
//                     width:"250px",
//                     fontWeight: "500",
//                     fontSize: "20px",
//                     marginBottom:"30px"
//                   }}
//                 >
//                   {product.name}
//                 </p>
//                 <p
//                 style={{
//                     margin:"auto",
//                     width:"290px",
//                     fontWeight: "300",
//                   }}
//                 >{product.desc}</p>
//               </div>
//             </>
//           ) : (
//             <>
//               <Image
//                 height={400}
//                 width={300}
//                 src={product.icon}
//                 style={{ objectFit: "fill" }}
//               />
//               <div style={{ position: "relative" }}>
//                 <p
//                   style={{
//                     marginTop: "30px",
//                     fontWeight: "600",
//                     fontSize: "20px",
//                   }}
//                 >
//                   {product.name}
//                 </p>
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
import React, { useRef, useState } from "react";
import Image from "next/image";

import { Box, Slide, Typography } from "@mui/material";
import CallMadeTwoToneIcon from "@mui/icons-material/CallMadeTwoTone";
const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "20px 15px", lg: "80px" },
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  heading: {
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#378C92",
    textDecoration: "underline",
    textDecorationColor: "#313431",
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
  },
  subHeading: {
    fontSize: { xs: "20px", lg: "40px" },
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#313431",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    mt: "3rem",
    gap: "26px",
    width: { xs: "100%", md: "63rem", lg: "80rem" },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "30px",
    width: { xs: "100%", md: "280px", lg: "300px" },
    // borderTop: "8px solid #378C92",
    height: "400px",
    transition: "transform 0.3s ease",
    position: "relative",
    // "&:nth-child(2n)": {
    //   mt: { xs: "0rem", md: "5rem" },
    // },
    // "&:nth-child(4n)": {
    //   mt: { xs: "0rem", md: "5rem" },
    // },
    "&:hover": {
      transform: "translateY(-10px)",
    },
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundSize: "contain",
    backgroundPosition: "center",
    filter: "blur(4px)",
    objectFit:"cover"
  },

  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "#378C92",
    borderRadius: "50%",
    padding: "15px",
    minWidth: "unset",
    minHeight: "unset",
    width: "auto",
    height: "auto",
  },

  cardHeading: {
    fontSize: "24px",
    lineHeight: "1.2",
    fontFamily: "Sweet Sans Pro",
    fontWeight: "500",
    color: "#ffffff",
  },
  cardContent: {
    fontSize: "12px",
    fontFamily: "Sweet Sans Pro",
    fontWeight: "400",
    color: "#ffffff",
    mt: "1rem",
    height:"100px"
  },

  headingContainer: {
    display: "flex",
    gap: "0.5rem",
  },

  headingLine: {
    width: "5px",
    height: "100%",
    backgroundColor: "#378C92",
  },
};

const Products = () => {
  const mainIconRef = useRef(null);
  const arrowIconRef = useRef(null);
  const contentRef = useRef(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const cardData = [
    {
      heading: "Renimer BK11 Wireless Earbuds",
      content:
        "Craft interactive and dynamic websites tailored to your business needs. Our expert developers leverage the latest technologies to deliver high-performance web solutioBluetooth 5.3, One-Step Pairing, Professional Audio, Comfortable, 40 Hrs Playtime, 4 ENC Mics, Fast Charging, LED Battery Display, Sensitive Touch, IP7 Waterproof, Universal Compatibility, Type-C ChargingBluetooth 5.3, One-Step Pairing, Professional Audio, Comfortable, 40 Hrs Playtime,4 ENC Mics, Fast Charging, LED Battery Display, Sensitive Touc… See morens that drive results.",
      backgroundImage: Prod1.src,
    },
    {
      heading: "INIU USB C Charger Cable 2m 3.1A Type C Cable Fast Charging",
      content:
        "INIU - The SAFE Fast Charging Professional Experience the safest charging with over 38 million global users. At INIU, we only use the highest quality materials, so we have the confidence to provide industry-leading 3 year warranty.Fast Charge 3.1A Designed with advanced Super Conductivity copper cables for reliable high speed of 3.1A Fully support fast charging QC 3.0 to incredibly revitalize your phone up to 93% in 1 hour.",
      backgroundImage: Prod2.src,
    },
    {
      heading: "Moobesthy Wireless Headphones Over Ear, Bluetooth Headphones",
      content:
        "Bluetooth 5.0 & Built-in Microphone  Wireless Headphones Over Ear Built in two 40mm large bezel driver units and Bluetooth 5.0 technology, our bluetooth headphones with microphone can offer more stable transmission speed, lower latency and better audio output,which give you wonderful music enjoyment. And built-in microphone of our lightweight headphones enables a hands-free clear phone communication, which like talking face to face with your families and friends.",
      backgroundImage: Prod3.src,
    },
    {
      heading: "RIENOK Bluetooth Speaker Portable Wireless Bluetooth Speaker",
      content:
        "HD Stereo Extra Bass: The wireless bluetooth speaker equips with 30W high power full frequency drivers speaker and an advanced digital signal processor to ensure a high-fidelity sound system. Extra bass button to enhance the bass effect",
      backgroundImage: Prod4.src,
    },
    {
      heading: "Wireless Charger, 3 in 1 Charging Station",
      content:
        "3 in 1 Wireless Charging Station with Adapter  Experience the convenience of charging up to 3 for your devices simultaneously, your phone, AirPods, and iWatch. Our fast wireless charger provides fast charging at 15W for your iPhone, 5W for AirPods, and 3W for your Apple Watch.Equipped with updated 25W USB-C Plug and 1-meter cable allow for rapid single-device charging for the iPhone 15 series, save your money. With a 1-meter cable, you can kiss distance-related charging woes goodbye.",
      backgroundImage: Prod5.src,
    },
    {
      heading: "USB C HUB, Multiport USB C Adapter for Macbook Pro & Air Accessories",
      content:
        "USB C HUB, Multiport USB C Adapter for Macbook Pro & Air Accessories",
      backgroundImage: Prod6.src,
    },
    {
      heading: "Wireless Mouse for Laptop With 2 USB A to USB C Adapter",
      content:
        "WIRELESS & BLUETOOTH: Usb mouse wireless is equipped with 2.4GHz wireless technology which provides an ultra-stable connection, allowing for zero delay between your actions. Furthermore, this technology increases the working distance is 10m. the compact design of the product is highly comfortable and helps to alleviate any tension or discomfort in your fingers and wrist.",
      backgroundImage: Prod7.src,
    },
    {
      heading: "Yizhet 1 pair Round Ear Pads 75mm Universal Replacement Earpads",
      content:
        "Universal 75mm round ear pads. Note: There is an error of 1-3mm due to manual measurement, please check your headset size before buying.",
      backgroundImage: Prod8.src,
    },
    {
      heading: "Betron 500ml Screen Cleaning Kit Includes Microfibre Cloths and Cleaning Brush",
      content:
        "Betron's comprehensive 500ml screen cleaning kit is designed to provide a thorough cleaning experience for all your electronic devices; it includes two microfiber cloths and a soft brush to ensure every part of your screen is spotless",
      backgroundImage: Prod9.src,
    },
    {
      heading: "Under Cabinet Kitchen Lights, 146 LED Motion Sensor Lights Indoor",
      content:
        "146 LED Super Bright & Eyes-caring The under cupboard kitchen lights contain 146 LEDs. Compared with traditional cupboard lights, the lamp beads of our lights are hidden on both sides of the lamp body and are invisible, avoiding the light directly irritating your eyes. The under cabinet kitchen lights produce softer, brighter, and more natural light.",
      backgroundImage: Prod10.src,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      <Box sx={styles.mainContainer}>
        <Box sx={styles.cardContainer}>
          {cardData.map((card, index) => (
            <Box
              key={index}
              sx={{
                ...styles.card,
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%), url(${card.backgroundImage})`,
                justifyContent:
                  hoveredIndex === index ? "space-between" : "flex-end",
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Box
                sx={{
                  ...styles.backgroundImage,
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%), url(${card.backgroundImage})`,
                }}
              />
              {hoveredIndex === index ? (
                <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"flex-end", height:'100%' }}>
                  <Slide
                    direction="right"
                    in
                    timeout={500}
                    container={contentRef.current}
                  >
                    <Box sx={styles.headingContainer}>
                      <Box sx={styles.headingLine} />
                      <Typography
                        sx={{ ...styles.cardHeading, fontSize: "20px" }}
                      >
                        {card.heading}
                      </Typography>
                    </Box>
                  </Slide>
                  <Slide
                    direction="up"
                    in
                    timeout={500}
                    container={contentRef.current}
                  >
                    <Typography sx={styles.cardContent}>
                      {card.content}
                    </Typography>
                  </Slide>
                </Box>
              ) : (
                <Box sx={styles.headingContainer}>
                  <Box sx={styles.headingLine} />
                  <Typography sx={styles.cardHeading}>
                    {card.heading}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
