import * as React from "react";
import { Paper, InputBase, Divider, IconButton, Button, Modal, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


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
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Button
        onClick={handleOpen}
        color="primary" sx={{ p: "10px" }} aria-label="add store info">
        Add store info
      </Button>
    </Paper>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <span>hi</span>
      </Box>
      
    </Modal>
    </>
  );
}
