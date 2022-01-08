import { IconButton, Button, FormControl, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function AddModalContent(props) {
    const AddStore = () => {
        // TODO: perform validation
        // TODO: add store to list
        props.handleClose();
    }

    return (<>
        <div style={{display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">
                Enter Store Details
            </Typography>
            <IconButton
                onClick={props.handleClose}
                type="submit" aria-label="cancel or close">
                <Close />
            </IconButton>
        </div>
        <FormControl style={{width: "100%"}}>
            <InputLabel htmlFor="name-inp">Store Name</InputLabel>
            <Input id="name-inp" />
        </FormControl>
        <FormControl style={{width: "100%"}}>
            <InputLabel htmlFor="desc-inp">Description</InputLabel>
            <Input id="desc-inp" aria-describedby="desc-inp-ht" />
            <FormHelperText style={{textAlign: "right"}} id="desc-inp-ht">e.g. <em>"Good variety of flavours here."</em></FormHelperText>
        </FormControl>
        <FormControl style={{width: "100%"}}>
            <InputLabel htmlFor="addr-txt-inp">Address</InputLabel>
            <Input id="addr-txt-inp" aria-describedby="addr-txt-inp-ht" />
            <FormHelperText style={{textAlign: "right"}} id="addr-txt-inp-ht">Plain text address of the store.</FormHelperText>
        </FormControl>
        <FormControl style={{width: "100%"}}>
            <InputLabel htmlFor="addr-pc-inp">Plus Code</InputLabel>
            <Input id="addr-pc-inp" aria-describedby="addr-pc-inp-ht" />
            <FormHelperText style={{textAlign: "right"}} id="addr-pc-inp-ht">The store's <a href="https://maps.google.com/pluscodes/" target="_blank">Plus Code</a>.</FormHelperText>
        </FormControl>
        <FormControl style={{width: "100%"}}>
            <InputLabel htmlFor="rating-inp">Rating</InputLabel>
            <Input id="rating-inp" aria-describedby="rating-inp-ht" />
            <FormHelperText style={{textAlign: "right"}} id="rating-ht">How much would you rate this store out of <b>5</b>?</FormHelperText>
        </FormControl>
        <FormControl style={{width: "100%"}}>
            <InputLabel htmlFor="phone-inp">Phone</InputLabel>
            <Input id="phone-inp" />
        </FormControl>
        <FormControl style={{width: "100%"}}>
            <InputLabel htmlFor="web-inp">Website</InputLabel>
            <Input id="web-inp" aria-describedby="web-inp-ht" />
            <FormHelperText style={{textAlign: "right"}} id="web-inp-ht">Website or active social page of the store, if any.</FormHelperText>
        </FormControl>
        <FormControl style={{width: "100%"}}>
            <InputLabel htmlFor="img-inp">Image Link</InputLabel>
            <Input id="img-inp" />
        </FormControl>
        <div style={{ marginTop: "1rem", textAlign: "right" }}>
        <Button variant="contained" onClick={AddStore}>Add Store</Button>
        </div>
        </>);
}