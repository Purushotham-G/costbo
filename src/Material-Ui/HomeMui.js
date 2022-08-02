import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ProjectMui } from "./ProjectMui";

export const HomeMui = () => {
  const [show, setShow] = useState(false);
  let orange = "#FFA500";

  const items = [
    "Free AI powered, Managed, Zero Maintenance Webstores",
    "Brand discovery through CostBo Marketplace & SEO",
    "Social Commerce powered by Customer Network",
    "Integrated Influencers & Resellers network",
  ];

  return (
    <Container sx={{ maxWidth: "1300px !important" }}>
      {!show && (
        <Grid container spacing={2}>
          {items.map((item, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Box sx={{ backgroundColor: "yellow" }}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: orange }}
                  onClick={() => setShow(!show)}
                >
                  Submit
                </Button>
                <Typography 
                fontSize={{ md: 15, xs: 10 }}
                
                >{item}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
      {show && <ProjectMui />}
    </Container>
  );
};
