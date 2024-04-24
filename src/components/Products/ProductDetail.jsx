"use client";
import { Box, Link, Typography } from "@mui/material";
import { ProductData } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";

const Product = ({ num }) => {
  let [imgnum,setimgnum] = useState(1)
  const clickHandler = (imgname) => {
    console.log(imgname);
    setimgnum(imgname);
  };
  const prodid = num - 1;
  return (
    <>
      <Box>
        <Box sx={{ width: "100%", padding: "10px", marginBottom: "30px" }}>
          <Link
            href="/products"
            sx={{ color: "#22222290", textDecoration: "none" }}
          >
            {"< "} Back to Products
          </Link>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "100px",
              }}
            >
              {ProductData[prodid].images.map((image, key) => (
                <Image
                  key={key}
                  src={image.src}
                  width={40}
                  height={40}
                  style={{ margin: "10px",cursor:"pointer",marginLeft:"20px"}}
                  onClick={() => {
                    clickHandler(image.num);
                  }}
                />
              ))}
            </Box>
            <Box sx={{minWidth:"400px"}}>
              {ProductData[prodid].images.map((img, key) => {
                return (
                  <Box sx={{width:"400px"}}>
                    {img.num === imgnum ? (
                      <Image
                        key={key}
                        src={img.src}
                        width={400}
                        height={400}
                        style={{ margin: "0" }}
                      />
                    ) : (
                      ""
                    )}
                  </Box>
                );
              })}
            </Box>
            
          </Box>
          <Box>
            <Typography sx={{width:"500px",marginLeft:"100px",fontFamily:"Poppins",fontWeight:"600",fontSize:"24px"}}>{ProductData[prodid].name}</Typography>
            <Typography>£ {ProductData[prodid].price}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Product;
