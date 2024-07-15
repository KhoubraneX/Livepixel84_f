import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function NewComponent() {
  return (
    <Box padding="20px">
    <Box height="50vh" gap="20px"  sx={{display: "flex", justifyContent: "space-between"}}>
        <Box width="35%" bgcolor="#1f2a40" gap="20px" display="flex" flexDirection="column" padding="10px">
            <Button height="65px" sx={{
                fontWeight: "900",
                backgroundColor: "#6677dd",
                color: "black",
                borderRadius: "0",
                ":hover" : {
                    backgroundColor: "#3EA48C",
                }
            }}>
                Show/Create Stream Key (button)
            </Button>
            <Button height="65px" sx={{
                fontWeight: "900",
                backgroundColor: "#6677dd",
                color: "black",
                borderRadius: "0",
                ":hover" : {
                    backgroundColor: "#3EA48C",
                }
            }}>
                Enable or disable Stream Key (button)
            </Button>
            <Box bgcolor="#03bf62" height="100%" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
            }}>
                <Typography fontWeight="900" textAlign="center">
                Live stream status (not a button)
                </Typography>
            </Box>
            <Button height="65px" sx={{
                fontWeight: "900",
                backgroundColor: "red",
                color: "black",
                borderRadius: "0",
                ":hover" : {
                    backgroundColor: "#3EA48C",
                }
            }}>
                Reset Stream Key (Button)
            </Button>
        </Box>
        <Box width="65%" bgcolor="#1f2a40" >

        </Box>
    </Box>
    <Box display="flex" gap="20px" height="calc(50vh - 60px)" marginTop="20px">
        <Box width="70%" height="100%" bgcolor="#1f2a40" >

        </Box>
        <Box width="30%" height="100%" bgcolor="#1f2a40">

        </Box>

    </Box>
    </Box>
  )
}

export default NewComponent