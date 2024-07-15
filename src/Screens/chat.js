import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { Box, Grid, Input, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";

function Chat() {
  const [sidebar, setSidebar] = useState(true);
  const [total, setTotal] = useState(0);
  const [section, setSection] = useState("1");
  const [height, setHeight] = useState(window.innerHeight);

  const handleChange = (event) => {
    setTotal(event.target.value);
  }

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="detail">
      <Header toggleSidebar={() => setSidebar(!sidebar)} hasSidebar={false} />

      <Box sx={{ marginTop: "80px", height: { xs: "100%"} }}>
        <Grid
          container
          spacing={1}
          sx={{ height: { xs: "100%", md: "calc(100vh - 80px)" } }}
          paddingBottom={{ xs: 1, md: 0 }}
        >
          {/* <Box> */}

          <Grid item xs={12} md={8}>
            <Item
              sx={{
                height: { xs: "300px", md: "calc(100% - 50px)" },
                backgroundColor: "#1F2942",
                padding: 0,
                marginTop: "25px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
              }}
            >
              <Box
                sx={{
                  height: "50px",
                  backgroundColor: "black",
                  padding: "8px 0px 0px 0px ",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
                    <Box
                      sx={{
                        padding: { xs: "10px", sm: "0px 15px" },
                        backgroundColor: "#6974E1",
                        color: "black",
                        cursor: "pointer",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        if (total > 0) {
                          setTotal((prev) => +prev - 1);
                        }
                      }}
                    >
                      -
                    </Box>

                    <Input
                      sx={{
                        width:"100px",
                        textAlign: "center",
                        backgroundColor: "white",
                        color: "black",
                        cursor: "pointer",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "& input": {
                          textAlign: "center",  
                        }
                      }}
                      value={total}
                      onChange={handleChange}
                    />

                    <Box
                      sx={{
                        padding: { xs: "10px", sm: "0px 15px" },
                        backgroundColor: "#6974E1",
                        color: "black",
                        cursor: "pointer",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setTotal((prev) => +prev + 1);
                      }}
                    >
                      +
                    </Box>

                    <Box
                      sx={{
                        padding: { xs: "10px", sm: "0px 25px" },
                        backgroundColor: "#6974E1",
                        color: "black",
                        cursor: "pointer",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        borderLeft: "2px solid #5E88C7",
                        width: "100%",
                      }}
                    >
                      SEND
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      padding: { xs: "10px", sm: "0px 60px" },
                      backgroundColor: "#3EA48C",
                      color: "black",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      borderLeft: "2px solid #5E88C7",
                      width: "100%",
                    }}
                  >
                    SUBSCRIBE
                  </Box>

                  <Box
                    sx={{
                      padding: { xs: "10px", sm: "0px 60px" },
                      backgroundColor: "#3EA48C",
                      color: "black",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      borderLeft: "2px solid #5E88C7",
                      width: "100%",
                    }}
                  >
                    BUTTON
                  </Box>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item
              sx={{
                height: { xs: "300px", md: "calc(100% - 50px)" },
                backgroundColor: "#1F2942",
                padding: 0,
                marginTop: "25px",
              }}
            >
              <Box
                sx={{
                  height: "50px",
                  backgroundColor: "black",
                  padding: "0px 0px 8px 0px ",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1F2942",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0px 20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px" },
                      color: "white",
                    }}
                    fontWeight={600}
                  >
                    Chat
                  </Typography>

                  <Box
                    sx={{
                      padding: { xs: "10px", sm: "0px 10px" },
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
                      Exit
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Item>
          </Grid>
          {/* </Box> */}
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{ height: { xs: "100%", md: "calc(100vh - 120px)" } }}
        >
          <Grid item xs={12} md={4}>
            <Item
              sx={{
                height: { xs: "300px", md: "calc(100% - 50px)" },
                backgroundColor: "#1F2942",
                padding: 0,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "12px", sm: "16px" },
                    color: "white",
                  }}
                  fontWeight={600}
                >
                  Random Section
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "12px", sm: "16px" },
                    color: "white",
                  }}
                  fontWeight={600}
                >
                  add a little bit of body text
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "12px", sm: "16px" },
                    color: "white",
                  }}
                  fontWeight={600}
                >
                  Random Section
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "12px", sm: "16px" },
                    color: "white",
                  }}
                  fontWeight={600}
                >
                  add a little bit of body text
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Item
              sx={{
                height: { xs: "300px", md: "calc(100% - 50px)" },
                backgroundColor: "#1F2942",
                padding: 0,
                marginTop: "2px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "black",
                  height: "40px",
                  width: "100%",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    padding: { xs: "10px", sm: "0px 50px" },
                    backgroundColor: `${
                      section === "1" ? "#1F2942" : "#151A2E"
                    }`,
                    color: "black",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                  onClick={() => setSection("1")}
                >
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px" },
                      margin: 0,
                      padding: 0,
                    }}
                    fontWeight={600}
                  >
                    TITLE
                  </Typography>
                </Box>

                <Box
                  sx={{
                    padding: { xs: "10px", sm: "0px 50px" },
                    backgroundColor: `${
                      section === "2" ? "#1F2942" : "#151A2E"
                    }`,
                    color: "black",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                  onClick={() => setSection("2")}
                >
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px" },
                      margin: 0,
                      padding: 0,
                    }}
                    fontWeight={600}
                  >
                    TITLE
                  </Typography>
                </Box>

                <Box
                  sx={{
                    padding: { xs: "10px", sm: "0px 50px" },
                    backgroundColor: `${
                      section === "3" ? "#1F2942" : "#151A2E"
                    }`,
                    color: "black",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                  onClick={() => setSection("3")}
                >
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px" },
                      margin: 0,
                      padding: 0,
                    }}
                    fontWeight={600}
                  >
                    TITLE
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: "#202B3F",
                  margin: "20px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                  // height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                          textAlign: "left",
                        }}
                        fontWeight={600}
                      >
                        Random Section
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                        }}
                        fontWeight={600}
                      >
                        add a little bit of body text
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                          textAlign: "left",
                        }}
                        fontWeight={600}
                      >
                        Random Section
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                        }}
                        fontWeight={600}
                      >
                        add a little bit of body text
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                          textAlign: "left",
                        }}
                        fontWeight={600}
                      >
                        Random Section
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                        }}
                        fontWeight={600}
                      >
                        add a little bit of body text
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                          textAlign: "left",
                        }}
                        fontWeight={600}
                      >
                        Random Section
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                        }}
                        fontWeight={600}
                      >
                        add a little bit of body text
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                          textAlign: "left",
                        }}
                        fontWeight={600}
                      >
                        Random Section
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                        }}
                        fontWeight={600}
                      >
                        add a little bit of body text
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                          textAlign: "left",
                        }}
                        fontWeight={600}
                      >
                        Random Section
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "white",
                        }}
                        fontWeight={600}
                      >
                        add a little bit of body text
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Chat;
