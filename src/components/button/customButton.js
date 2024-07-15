import { Box, Typography } from '@mui/material'
import React from 'react'

function CustomButton() {
  return (
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
  )
}

export default CustomButton
