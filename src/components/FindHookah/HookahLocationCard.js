import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
        alt="hooka-card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {item.rating} / 5
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HookahLocationCard;
