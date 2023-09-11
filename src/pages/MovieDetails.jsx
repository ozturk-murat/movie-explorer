import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/api";
import { Grid } from "@mui/material";
import MovieDetailHeader from "../components/movie/MovieDetailHeader";
import MovieCardDetail from "../components/movie/MovieCardDetail";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(movieId).then((response) => {
      setMovie(response);
    });
  }, [movieId]);

  console.log(movie);
  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <Grid container border={"1px solid #fbc500"} borderRadius={3}>
      <Grid item xs={12} sm={12} md={4} borderRadius={10}>
        <img
          width="100%"
          height="100%"
          src={movie.Poster}
          alt={movie.Title}
          style={{ borderRadius: 10 }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={8} padding={5}>
        <MovieDetailHeader
          title={movie.Title}
          rating={movie.imdbRating}
          year={movie.Year}
        />
        <MovieCardDetail
          plot={movie.Plot}
          actors={movie.Actors}
          runtime={movie.Runtime}
          imdbVotes={movie.imdbVotes}
          writer={movie.Writer}
          genre={movie.Genre}
        />
      </Grid>
    </Grid>
  );
}

export default MovieDetails;
