import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchParams } from "../../redux/reducers/moviesSlice";

function MovieTypeFilter() {
  const dispatch = useDispatch();
  const { searchParams } = useSelector((state) => state.movies);
  const [alignment, setAlignment] = useState();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    dispatch(
      updateSearchParams({
        ...searchParams,
        type: newAlignment
      })
    );
  };


  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      fullWidth
    >
      <ToggleButton value="movie">Movie</ToggleButton>
      <ToggleButton value="series">Series</ToggleButton>
      <ToggleButton value="episode">Episode</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default MovieTypeFilter;
