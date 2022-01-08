import "./styles/Tips.scss";
// import * as React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Tips = () => {
  const title = "Hook-aah Tipies";
  const heading = "Categories";
  return (
    <>
      <div className="tips-main">
        <Container>
          <div className="tips-title">{title}</div>
          <p>
            <div className="tips-heading">{heading}</div>

            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="Shisha Image"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="left"
                    >
                      Shisha
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="left"
                    >
                      Find some amazing tips and tricks to take your Hookah to
                      the next level
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Box>
            </Card>
            <br></br>
            <Paper elevation={6} variant="outlined" square>
              hello
            </Paper>
          </p>
        </Container>
      </div>
    </>
  );
};

export default Tips;
//-----------------------------------------
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function ActionAreaCard() {
//   return (
//     // <Card sx={{ maxWidth: 345 }}>
//     <Card >

//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Shisha
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Find some amazing tips and tricks to take your Hookah to the next level
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }
