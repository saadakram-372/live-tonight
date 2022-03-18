import React from "react";

// Libraries
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

// Styled components
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar({
  searchInput,
  setSearchInput,
  setArtistName,
  setLoading,
}) {
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Search>
        <StyledInputBase
          name="search-text"
          placeholder="Search artist/band..."
          inputProps={{ "aria-label": "search" }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </Search>

      <button
        onClick={() => {
          if (searchInput === " ") {
            alert("Please enter a name of band/artist");
          } else {
            setLoading(true);
            setArtistName(searchInput);
          }
        }}
        style={{ width: "20%", height: 40, marginLeft: -20 }}
        color="#000"
      >
        Search
      </button>
    </div>
  );
}
