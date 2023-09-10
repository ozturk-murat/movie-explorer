import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchParams: {
    text: "Pokemon",
    year: null,
    type: "",
    page: 1
  },
  movies: [],
  error: null,
  loading: false,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    updateSearchParams: (state, action) => {
      state.searchParams = action.payload;
      state.loading = false;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = true
    },
  },
});

export const { updateSearchParams, setMovies, setError, setLoading } = moviesSlice.actions;

export default moviesSlice.reducer;
