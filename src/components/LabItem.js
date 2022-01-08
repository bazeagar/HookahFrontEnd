import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LabItem = ({ id, imageUrl, make, flavourRating, onDelete }) => {
  return (
    <Card sx={{ width: 345 }} onClick={() => console.log(id)}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="hooka-card"
      />
      <CardContent>
        Make:{make}
        Strength:{flavourRating}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={(e) => onDelete(id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default LabItem;
