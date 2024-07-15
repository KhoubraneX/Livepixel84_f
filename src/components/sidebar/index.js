import React, { useState } from "react";
import { Box, Button } from "@mui/material";
function Sidebar({ open, handleClick }) {
  const [section, setSection] = useState("1");

  const [selectedButton, setSelectedButton] = useState([]);

  const handleButtonClick = (buttonId) => {
    handleClick()
    if (selectedButton.includes(buttonId)) {
      // remove button from selectedButtons
      setSelectedButton(selectedButton.filter((id) => id !== buttonId));
      return;
    }
    selectedButton.push(buttonId);
    setSelectedButton([...selectedButton]);
  };
  const buttonStyle = (buttonId) => ({
    backgroundColor: selectedButton.includes(buttonId) ? "#3EA48C" : "initial",
    "&:hover": {
      backgroundColor: "#3EA48C",
    },
  });

  return (
    <Box
      sx={{
        width: "300px",
        border: "1px solid black",
        height: "100%",
        position: "fixed",
        backgroundColor: "rgb(32, 42, 67)",

        top: "100px",
        transform: open ? "translateX(0)" : "translateX(-105%)",
        transition: "1s",
        // transform: "translateX(0)"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 15px",
        }}
      >
        {["1", "2", "3"].map((sec) => (
          <Box
            key={sec}
            sx={{
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              backgroundColor: section === sec ? "#1F2942" : "initial",
              padding: "10px 5px",
            }}
            onClick={() => setSection(sec)}
          >
            {sec} Section
          </Box>
        ))}
      </Box>

      {section === "1" && (
        <Box sx={{ border: "1px solid #1F273C" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              padding: "0px 15px",
              margin: "10px 0px",
            }}
          >
            {[{label: "one" , value: "one1"}, {label: "two" , value: "two2"} , {label: "three" , value: "three3"}].map(({label, value}) => (
              <Button
                key={value}
                variant="contained"
                onClick={() => handleButtonClick(value)}
                sx={buttonStyle(value)}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Box>
      )}
      {section === "2" ? (
        <>
          <Box sx={{ border: "1px solid #1F273C" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                padding: "0px 15px",
                margin: "10px 0px",
              }}
            >
            {[{label: "one" , value: "one2"}, {label: "two" , value: "two3"} , {label: "three" , value: "three4"}].map(({label, value}) => (
              <Button
                key={value}
                variant="contained"
                onClick={() => handleButtonClick(value)}
                sx={buttonStyle(value)}
              >
                {label}
              </Button>
            ))}
            </Box>
          </Box>

          <Box sx={{ border: "1px solid #1F273C" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                padding: "15px 15px",
                margin: "10px 0px",
                flexWrap: "wrap",
              }}
            >
             {[{label: "one" , value: "one8"}, {label: "two" , value: "two8"} , {label: "three" , value: "three8"}].map(({label, value}) => (
              <Button
                key={value}
                variant="contained"
                onClick={() => handleButtonClick(value)}
                sx={buttonStyle(value)}
              >
                {label}
              </Button>
            ))}
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}

      {section === "3" ? (
        <>
          <Box sx={{ border: "1px solid #1F273C" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                padding: "0px 15px",
                margin: "10px 0px",
              }}
            >
            {[{label: "one" , value: "one3"}, {label: "two" , value: "two4"} , {label: "three" , value: "three5"}].map(({label, value}) => (
              <Button
                key={value}
                variant="contained"
                onClick={() => handleButtonClick(value)}
                sx={buttonStyle(value)}
              >
                {label}
              </Button>
            ))}
            </Box>
          </Box>

          <Box sx={{ border: "1px solid #1F273C" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                padding: "15px 15px",
                margin: "10px 0px",
                flexWrap: "wrap",
              }}
            >
            {[{label: "one" , value: "one1"}, {label: "two" , value: "two2"} , {label: "three" , value: "three3"}].map(({label, value}) => (
              <Button
                key={value}
                variant="contained"
                onClick={() => handleButtonClick(value)}
                sx={buttonStyle(value)}
              >
                {label}
              </Button>
            ))}
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default Sidebar;
