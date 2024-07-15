import React from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";

function Main({ open, items, containerRef }) {
  return (
    <Box
      sx={{
        width: open ? "calc(100% - 300px)" : "100%",
        marginLeft: open ? "300px" : "0px",
        // md:{width: "calc(100% - 300px)" , marginLeft: "300px",},
        // sm:{width: "100%" ,  marginLeft: "0px"},

        height: "100%",
        paddingTop: "80px",
        transition: "all 1s",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} ref={containerRef}>
          {items?.length > 0 &&
            items?.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
                <Box sx={{ height: "200px", backgroundColor: "#6168e5" }}>
                  {item}
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Main;
