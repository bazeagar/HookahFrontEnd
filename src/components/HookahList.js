import "./styles/HookahList.scss";
import HookahLocationCard from "./HookahLocationCard";
import Grid from "@mui/material/Grid";

const GridItem = (item) => {
  return (
    <>
      <Grid className="HookahList" item xs={12} justifyContent="center">
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
        container
        spacing={3}
        direction="row"
        justify="center"
        justifyContent="center"
        alignItems="stretch"
      >
        {list.map((item) => GridItem(item))}
      </Grid>
    </>
  );
};

export default GetHookahList;
