import HookahLocationCard from "./HookahLocationCard";
import Grid from "@mui/material/Grid";

const GridItem = (item) => {
  return (
    <>
      <Grid item xs={12} justifyContent="center">
        <HookahLocationCard
          imageUrl={item.imgUrl}
          title={item.name}
          rating={item.rating}
        />
      </Grid>
    </>
  );
};
const GetHookahList = ({ list }) => {
  return (
    <>
      <Grid
        className="HookahCard"
        container
        spacing={3}
        direction="row"
        justify="center"
        justifyContent="center"
        alignItems="stretch"
        style={{ height: "100%" }}
      >
        {list.map((item) => GridItem(item))}
      </Grid>
    </>
  );
};

export default GetHookahList;
