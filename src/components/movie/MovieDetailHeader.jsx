import { Grid, Typography } from "@mui/material";
import React from "react";

function MovieDetailHeader({ title, rating, year }) {
  return (
    <Grid
      container
      alignItems={"center"}
      borderBottom={"1px solid #fbc500"}
      p={2}
    >
      <Grid item xs={10}>
        <Typography
          gutterBottom
          variant="h5"
          textTransform={"uppercase"}
          fontWeight={700}
          component="div"
        >
          {title}
        </Typography>

        <Typography>
          {year} {" / "} Imdb {rating}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default MovieDetailHeader;
