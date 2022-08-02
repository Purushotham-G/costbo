import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTrail, animated as a, useSpring } from "react-spring";

export const Header2 = () => {

  const [toggle, set] = useState(true);
  const config = { mass: 5, tension: 2000, friction: 200 };
  const items = [
    "Always changing technology & hard to maintain",
    "No visibility, No traffic and Poor SEO",
    "No access to customer network",
    "No integrated marketing channels",
  ];
  const trailData = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 40,

    from: { opacity: 0, x: 40, height: 0 },
  });
  
  return (
    <>
        <Container sx={{maxWidth:"1300px !important"}}>
            <Box>
                <Typography component="h6" fontWeight={600} fontSize={22}>
                Your current Website
                </Typography>
                <Grid container spacing={2}>
                  {items.map((item , i)=>{
                    return(
                        <Grid item xs={12} md={3} key={i}>
                          <Box  sx={{backgroundColor:"red"}}>
                            <Typography>{items}</Typography>
                          </Box>
                      </Grid>
                    )
                  })}
                </Grid>
            </Box>
        </Container>
    </>
  )
}
