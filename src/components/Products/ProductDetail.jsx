"use client";
import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { ProductData } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";

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
        <Box
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: { md: "900px", lg: "1200px", xl: "1440px" },
            flexDirection: { xs: "column", md: "row" },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: { xs: "90%", md: "50%", xl: "502px" },
              mx: { xs: "auto", md: "0" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", md: "auto" },
                flexDirection: { xs: "row", md: "column" },
                order: { xs: "1", md: "0" },
                mx: { xs: "auto", md: "0" },
                justifyContent: { sm: "space-between", md: "flex-start" },
                overflow: "scroll",
              }}
            >
              {ProductData[prodid].images.map((image, key) => (
                <Image
                  key={key}
                  src={image.src}
                  width={42}
                  height={42}
                  style={{
                    marginBottom: "10px",
                    marginRight: "10px",
                    cursor: "pointer",
                    minWidth: "42px",
                    borderRadius: "10px",
                  }}
                  onMouseEnter={() => {
                    clickHandler(image.num);
                  }}
                />
              ))}
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "500px", md: "460px" },
                mx: { sm: "auto", md: "0" },
              }}
            >
              {ProductData[prodid].images.map((img, key) => {
                return (
                  <Box sx={{ width: { xs: "100%" } }}>
                    {img.num === imgnum ? (
                      <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: img.src,
                        },
                        largeImage: {
                          src: img.src,
                          width: 1200,
                          height: 1800,
                        },
                      }}
                    />
                      
                    ) : (
                      ""
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "90%", md: "40%", xl: "666px" },
              maxHeight: { md: "1100px" },
              padding: "0 10px",
              scrollbarColor: "transparent",
              ml:"20px"
            }}
          >
            <Typography
              sx={{
                fontFamily: "Amazon Ember,Arial,sans-serif",
                fontWeight: "400",
                fontSize: { xs: "20px", md: "24px" },
                lineHeight: "32px",
                borderBottom: ".5px black solid",
                paddingBottom: "20px",
              }}
            >
              {ProductData[prodid].name}
            </Typography>
            <Typography
              sx={{
                fontSize: "28px",
                marginTop: "20px",
                fontFamily: "Amazon Ember,Arial,sans-serif",
              }}
            >
              £ {ProductData[prodid].price}
            </Typography>
            <Box sx={{ marginTop: "30px" }}>
              <Box
                sx={{
                  display: "flex",
                  fontFamily: "Amazon Ember,Arial,sans-serif",
                  my: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginRight: "30px",
                    width: "150px",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Brand Name :
                </Typography>
                <Typography>{ProductData[prodid].brand}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  fontFamily: "Amazon Ember,Arial,sans-serif",
                  my: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginRight: "30px",
                    width: "150px",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Material :
                </Typography>
                <Typography>{ProductData[prodid].material}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  fontFamily: "Amazon Ember,Arial,sans-serif",
                  my: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginRight: "30px",
                    width: "150px",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  color :
                </Typography>
                <Typography>{ProductData[prodid].color}</Typography>
              </Box>
              <Box
                sx={{
                  fontFamily: "Amazon Ember,Arial,sans-serif",
                  my: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginRight: "30px",
                    width: "150px",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  About :
                </Typography>
                <List>
                  {ProductData[prodid].about.map((about, key) => (
                    <ListItem
                      sx={{
                        fontSize: "14px",
                        lineHeight: "20px",
                        fontFamily: "Amazon Ember,Arial,sans-serif",
                      }}
                      key={key}
                    >
                      {">>"}
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
