import React from "react";

// Libraries
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// Core components
import SearchBar from "./SearchBar";

export default function AppHeader(props) {
  const { searchInput, setSearchInput } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Title at top left corner */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Live Tonight
          </Typography>

          {/* Search bar at top right corner */}
          {/* <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
