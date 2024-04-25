"use client";
import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { ProductData } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";

const Product = ({ num }) => {
  let [imgnum, setimgnum] = useState(1);
  const clickHandler = (imgname) => {
    console.log(imgname);
    setimgnum(imgname);
  };
  const prodid = num - 1;
  return (
    <>
      <Box>
        <Box sx={{marginTop:{xs:"100px",xl:"20px"}}}>
        </Box>
        <Box sx={{ display: "flex", width: "100%",flexDirection:{xs:"column",md:"row"},justifyContent:"space-evenly" }}>
          <Box sx={{ display: "flex",flexDirection:{xs:"column",md:"row"}, width: {xs:"90%",md:"50%",xl:"30%"}, justifyContent: {md:"center"},alignItems:{xs:"center",md:"start"},mx:{xs:"auto",md:"0"} }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: {xs:"100%",md:"auto"},
                flexDirection:{xs:"row",md:"column"},
                order:{xs:"1",md:"0"},
                mx:{xs:"auto",md:"0"},
                overflow:"scroll"
              }}
            >
              {ProductData[prodid].images.map((image, key) => (
                <Image
                  key={key}
                  src={image.src}
                  width={80}
                  height={80}
                  style={{
                    marginBottom: "10px",
                    marginRight: "10px",
                    cursor: "pointer",
                    minWidth:"80px"
                  }}
                  onClick={() => {
                    clickHandler(image.num);
                  }}
                />
              ))}
            </Box>
            <Box sx={{width:{xs:"100%",sm:"500px",md:"auto"}}}>
              {ProductData[prodid].images.map((img, key) => {
                return (
                  <Box sx={{width:{xs:"100%"}}}>
                    {img.num === imgnum ? (
                      <Image
                        key={key}
                        src={img.src}
                        width={400}
                        height={400}
                        style={{minWidth:"100%",minHeight:"100%",objectFit:"fill" }}
                      />
                    ) : (
                      ""
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ width: {xs:"90%",md:"40%",xl:"60%"}, mx: {xs:"auto"} }}>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontWeight: "600",
                fontSize: {xs:"20px",md:"24px",md:"30px"},
              }}
            >
              {ProductData[prodid].name}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "28px",
                marginTop: "20px",
                fontFamily: "Sweet Sans Pro",
                letterSpacing: "2px",
                opacity: ".5",
              }}
            >
              £ {ProductData[prodid].price}
            </Typography>
            <Box sx={{ marginTop: "30px" }}>
              <Box sx={{ display: "flex", fontSize: "20px", my: "20px" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginRight: "30px",
                    width: "150px",
                    textTransform: "uppercase",
                    fontFamily: "Sweet Sans Pro",
                  }}
                >
                  Brand Name :
                </Typography>
                <Typography sx={{ fontFamily: "Sweet Sans Pro" }}>
                  {ProductData[prodid].brand}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", fontSize: "20px", marginY: "20px" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginRight: "30px",
                    width: "150px",
                    textTransform: "uppercase",
                    fontFamily: "Sweet Sans Pro",
                  }}
                >
                  Material :
                </Typography>
                <Typography sx={{ fontFamily: "Sweet Sans Pro" }}>
                  {ProductData[prodid].material}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", fontSize: "20px", marginY: "20px" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginRight: "30px",
                    width: "150px",
                    textTransform: "uppercase",
                    fontFamily: "Sweet Sans Pro",
                  }}
                >
                  color :
                </Typography>
                <Typography sx={{ fontFamily: "Sweet Sans Pro" }}>
                  {ProductData[prodid].color}
                </Typography>
              </Box>
              <Box sx={{ fontSize: "20px", marginY: "20px" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontFamily: "Sweet Sans Pro",
                  }}
                >
                  About :
                </Typography>
                <List>
                  {ProductData[prodid].about.map((about, key) => (
                    <ListItem
                      sx={{
                        fontSize: "16px",
                        marginY: "10px",
                        marginX: "0",
                        padding: "0",
                        fontFamily: "Sweet Sans Pro",
                      }}
                    >
                      {">> "}
                      {about.point}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Product;
