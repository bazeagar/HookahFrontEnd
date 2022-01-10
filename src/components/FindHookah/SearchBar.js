import * as React from "react";
import { Paper, InputBase, Divider, IconButton, Button  } from "@mui/material";
import { Search } from "@mui/icons-material";
import Modal from '../Modal';
import AddModalContent from "./AddModalContent";

export default function CustomizedInputBase() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <Search />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Button
        onClick={handleOpen}
        color="primary" sx={{ p: "10px" }} aria-label="add store info">
        Add store info
      </Button>
    </Paper>
    <Modal handleClose={handleClose} open={open}>
      <AddModalContent handleClose={handleClose} />
    </Modal>
    </>
  );
}
