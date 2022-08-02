import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  Input,
  InputAdornment,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { ProjectMui } from "./ProjectMui";

export const Header1 = () => {
    const [show, setShow]= useState(false);
    const whiteColor="#FFFFFF";
  return (
    <>
      {(!show && <Box component="header" sx={{ background: `yellow ` }}>
        <Container sx={{ maxWidth: "1300px !important" }}>
          <Box
            component="nav"
            display="flex"
            pt={3.5}
            pb={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box component="a" href="#">
              <Box
                component="img"
                src="/assets/images/logo_v3.png"
                width="170px"
                alt="CostBo"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                fontSize={16}
                fontWeight={500}
                display={{ md: "block", xs: "none" }}
              >
                Get CostBo App
              </Typography>
              
              <Button
                variant="contained"
                onClick={()=>setShow(!show)}
                sx={{fontSize:"16px",
                background:"primaryColor",
                fontWeight:"600",
                padding:{ md: "7px 27px", xs: "7px" },
                "&:hover": {
                    background: "orange",
                    border: "1.5px solid " + whiteColor,
                  },

            }}
              >
                Start Selling
              </Button>
            </Box>
          </Box>

          <Grid container alignItems="center" mt={{ md: 2, xs: 5 }}>
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                sx={{
                  fontSize: { md: "31px", xs: "21px" },
                  fontWeight: 600,
                  marginBottom: "12px",
                  lineHeight: 1.7,
                  letterSpacing: "0.3px",
                  textAlign: "start",
                }}
              >
                Simplified, Managed <br />
                Direct to Consumer (D2C) eCommerce <br />
                for Brands and Manufacturers
              </Typography>
              <Box display="flex">
                <TextField
                  variant="filled"
                  label="Enter Phone Number"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        {<PhoneIphoneIcon position="end"/>}
                      </InputAdornment> 
                    ),
                  }}
                />

                <Button variant="contained" sx={{ fontSize: { md: "21", xs: "12px"}, fontWeight:"600" }}>
                  Start Selling
                </Button>
              </Box>
              <Box >

                <Typography
                  component="p"
                  fontSize={16}
                  fontWeight={600}
                  textAlign="start"
                  mt={2}

                >
                    <Icon>{<VerifiedUserIcon />}</Icon>
                  Trusted by 1000s of Business owners
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box component="img" src="assets/images/banner_phone.png" width="100%">

                </Box>
            </Grid>
          </Grid>
                  

        </Container>
      </Box>)}
      {show && <ProjectMui />}
    </>
  );
};
