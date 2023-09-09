export const filterMovies = (year, type, all) => ({
  type: "FILTER_MOVIES",
  year,
  all,
});