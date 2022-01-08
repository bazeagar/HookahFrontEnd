import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const HookahLocationCard = ({ id, title, imageUrl, rating }) => {
  return (
    <Card sx={{ width: 345 }}
      onClick = {() => console.log(id)}
    >
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="hooka-card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating} / 5
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HookahLocationCard;
