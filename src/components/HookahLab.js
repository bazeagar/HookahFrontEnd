import { Button } from "@mui/material";
import { useState } from "react";
import {
  hookahFlavours,
  flavourIds,
  imageUrlIds,
  makeIds,
} from "./HookahFlavours";
import LabItem from "./LabItem";

const HookahLab = () => {
  const title = "Hookah Lab";

  const labItems = hookahFlavours;
  const [flavours, setFlavours] = useState(labItems);

  const updateFlavoursAfterRemoving = (id) => {
    setFlavours(flavours.filter((x) => x.id !== id));
  };

  const addFlavour = () => {
    // show popup
    setFlavours([
      ...flavours,
      {
        id: 1,
        make: 1,
        flavourId: 1,
        strength: 5,
        classic: true,
        imgId: 111,
      },
    ]);
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
            onDelete={updateFlavoursAfterRemoving}
          />
        ))}
        <Button onClick={addFlavour}>Add item</Button>
      </div>

      <div>Extras</div>

      <div>Coal</div>
    </>
  );
};

export default HookahLab;
