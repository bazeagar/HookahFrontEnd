import { Button } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Modal from "./Modal";
import Select from "@mui/material/Select";
import {
  hookahFlavours,
  flavourIds,
  imageUrlIds,
  makeIds,
} from "./HookahFlavours";
import LabItem from "./LabItem";

const HookahLab = () => {
  const title = "Hookah Lab";
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setCurrentFlavour(hookahFlavours[1]);
    setOpen(false);
  };
  const [flavours, setFlavours] = useState([]);
  // const [addItemPop, setAddItemPop] = useState(false);
  const [currentFlavour, setCurrentFlavour] = useState(hookahFlavours[1]);

  const updateFlavoursAfterRemoving = (id) => {
    setFlavours(flavours.filter((x) => x.id !== id));
  };

  const handleFlavourAdd = () => {
    console.log("flavaa");
    setFlavours([...flavours, currentFlavour]);
    setCurrentFlavour(hookahFlavours[1]);
    setOpen(false);
  };
  const addFlavour = () => {
    // show popup
    return (
      <>
        <Modal
          open={open}
          handleClose={handleClose}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Flavour</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentFlavour}
              label="Flavour"
              onChange={(event) => setCurrentFlavour(event.target.value)}
            >
              {hookahFlavours.map((f) => (
                <MenuItem value={f}>
                  {makeIds[f.make] + flavourIds[f.flavourId]}
                </MenuItem>
              ))}
              {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
            <Button onClick={handleFlavourAdd}>Add Flavour</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </FormControl>
        </Modal>
      </>
    );
  };
  return (
    <>
      <div>{title}</div>

      <div>
        Flavours total items {flavours.length}
        {flavours?.map((item) => (
          <LabItem
            imageUrl={imageUrlIds[item.imgId]}
            key={item.id}
            id={item.id}
            flavourRating={item.strength}
            make={makeIds[item.make]}
            name={flavourIds[item.flavourId]}
            onDelete={updateFlavoursAfterRemoving}
          />
        ))}
        <Button onClick={() => setOpen(true)}>Add item</Button>
      </div>

      <div>Extras</div>

      <div>Coal</div>
      {addFlavour()}
    </>
  );
};

export default HookahLab;
