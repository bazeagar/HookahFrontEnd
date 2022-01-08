import HookahLocationCard from "./HookahLocationCard";
import Grid from "@mui/material/Grid";

const GridItem = (item) => {
  return (
    <Grid
      key={item.id}
      style={{
        maxHeight: "100%",
        display: "flex",
        justifyContent: "center"
      }} item xs={12}>
      <HookahLocationCard
        imageUrl={item.imgUrl}
        title={item.name}
        rating={item.rating}
      />
    </Grid>
  );
};
const GetHookahList = ({ list }) => {
  return (
    <Grid
      container
      spacing={3}
      style={{ 
        maxHeight: "100%",
        overflow: "auto"
      }}
    >
      {list.map((item) => GridItem(item))}
    </Grid>
  );
};

export default GetHookahList;
