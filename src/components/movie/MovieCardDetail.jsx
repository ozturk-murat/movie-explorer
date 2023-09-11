import React from "react";
import { Grid, Typography } from "@mui/material";
import MovieInfoCard from "./MovieInfoCard";
import {
  Attribution,
  PeopleAlt,
  PlayArrow,
  TheaterComedy,
} from "@mui/icons-material";

function MovieCardDetail({ plot, runtime, imdbVotes, writer, genre, actors }) {
  return (
    <Grid container alignItems={"center"} p={2}>
      <Grid item xs={10} mb={10}>
        <Typography gutterBottom component="div">
          {plot}
        </Typography>
        <Typography gutterBottom component="div">
          Actors: {actors}
        </Typography>
      </Grid>

      <Grid item xs={10}>
        <Grid container spacing={1}>
          <MovieInfoCard
            title="Runtime"
            value={runtime}
            icon={<PlayArrow sx={{ height: 38, width: 38 }} />}
          />
          <MovieInfoCard
            title="Imdb Votes"
            value={imdbVotes}
            icon={<PeopleAlt sx={{ height: 38, width: 38 }} />}
          />
          <MovieInfoCard
            title="Writer"
            value={writer}
            icon={<Attribution sx={{ height: 38, width: 38 }} />}
          />
          <MovieInfoCard
            title="Genre"
            value={genre}
            icon={<TheaterComedy sx={{ height: 38, width: 38 }} />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieCardDetail;
