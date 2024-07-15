import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Header({ toggleSidebar, hasSidebar }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "15px 7px", sm: "20px" },
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        // width "100%",
        backgroundColor: "#151A30",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "0 5px", sm: "0px 20px" },
          width: "100%",
          backgroundColor: "#202A43",
          height: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {hasSidebar && (
            <Box
              sx={{
                padding: "20px",
                backgroundColor: "#3EA48C",
                cursor: "pointer",
              }}
              onClick={toggleSidebar}
            ></Box>
          )}
          <Box
            sx={{
              padding: { xs: "10px", sm: "7px 15px", md: "10px 30px" },
              backgroundColor: "#3EA48C",
              color: "black",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "12px", sm: "16px" } }}
              fontWeight={600}
            >
              Logo
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box
            sx={{
              padding: { xs: "10px", sm: "10px 40px" },
              cursor: "pointer",
              backgroundColor: "#3EA48C",
              color: "black",
            }}
            onClick={() => navigate("/chat")}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "12px", sm: "16px" } }}
              fontWeight={600}
            >
              create free acount
            </Typography>
          </Box>

          <Box
            sx={{
              padding: { xs: "10px", sm: "10px 40px" },
              backgroundColor: "#3EA48C",
              color: "black",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "12px", sm: "16px" } }}
              fontWeight={600}
            >
              Login
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
