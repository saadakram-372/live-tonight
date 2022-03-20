/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// Libraries
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function AppHeader(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#000" }}>
        <Toolbar>
          {/* Title at top left corner */}
          <img
            src={require("../assets/logo.jpeg")}
            style={{
              height: 70,
              width: 70,
              alignSelf: "flex-start",
              marginRight: 16,
              marginTop: 8,
              marginBottom: 8,
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left", fontFamily: "desyrel" }}
          >
            Live Tonight!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
