import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchParams } from "../../redux/reducers/moviesSlice";

function SearchTextField() {
  const dispatch = useDispatch();
  const { searchParams } = useSelector((state) => state.movies);
  const { text } = useSelector((state) => state.movies.searchParams);

  const handleSearchInputChange = (e) => {
    const newText = e.target.value;
    dispatch(
      updateSearchParams({
        ...searchParams,
        text: newText
      })
    );
  };

  return (
    <TextField
      id="outlined-basic"
      label="Search Movies & Series"
      variant="outlined"
      color="secondary"
      value={text}
      fullWidth
      onChange={handleSearchInputChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <ManageSearchIcon color="primary" />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchTextField;
