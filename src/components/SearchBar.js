import * as React from "react";
import { Paper, InputBase, Divider, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Button color="primary" sx={{ p: "10px" }} aria-label="directions">
        Add store info
      </Button>
    </Paper>
  );
}
