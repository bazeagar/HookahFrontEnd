import HookahLocationCard from "./HookahLocationCard";
import Grid from "@mui/material/Grid";

const GridItem = (item, props) => {
  return (
    <Grid
      key={item.id}
      style={{
        maxHeight: "100%",
        display: "flex",
        justifyContent: "center"
      }} item xs={12}>
      <HookahLocationCard
        item={item}
        {...props}
      />
    </Grid>
  );
};
const GetHookahList = (props) => {
  return (
    <Grid
      container
      spacing={3}
      style={{ 
        maxHeight: "100%",
        overflow: "auto"
      }}
    >
      {props.list.map((item) => GridItem(item, props))}
    </Grid>
  );
};

export default GetHookahList;
