import * as React from "react";
import { Card, CardContent, CardActions, CardMedia, Typography, Button, Grid } from "@mui/material";
import { Star, Phone, Public } from "@mui/icons-material";
import { yellow } from '@mui/material/colors';

const HookahLocationCard = ({ item, setActiveListItem, activeListItem }) => {
  return (
    <Card
      sx={{ width: activeListItem === item ? 500 : 345 }}
      onClick = {() => setActiveListItem(item)}
    >
      <CardMedia
        component="img"
        height="140"
        image={item.imgUrl}
        alt="hookah-card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant="body2" color="text.secondary" sx={{textAlign: "left", width: "60%"}}>
            {item.address.text}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign: "right"}}>
          <Grid container direction="row" justifyContent="center">
            <Grid item>
            {item.rating}
            </Grid>
            <Grid item>
              <Star sx={{ color: yellow[700], fontSize: 20 }} /> 
            </Grid>
          </Grid>
          </Typography>
        </div>
      </CardContent>
      {
        activeListItem === item
        ? <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          style={{ width: "35%", display: "flex", justifyContent: "space-around"}}
          href={item.website} target="_blank"><Public color="primary" />Visit Website</Button>
        <Button
          style={{ width: "35%", display: "flex", justifyContent: "space-around"}}
          href={`tel:${item.phone}`}><Phone color="primary" /> {item.phone}</Button>
        </CardActions>
        : null
      }
    </Card>
  );
};

export default HookahLocationCard;
