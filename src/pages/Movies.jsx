import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../services/api";
import InputGroup from "../components/search/InputGroup";
import MoviesTable from "../components/table/MoviesTable";
import TableSkeleton from "../components/table/TableSkeleton";
import { Pagination } from "@mui/material";
import {
  setMovies,
  updateSearchParams,
  setError,
  setLoading,
} from "../redux/reducers/moviesSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const { searchParams, loading } = useSelector((state) => state.movies);
  const { page } = useSelector((state) => state.movies.searchParams);

  useEffect(() => {
    handleSearch();
  }, [updateSearchParams, page]);

  const handleSearch = () => {
    dispatch(setLoading(true));
    getMovies({
      text: searchParams.text,
      year: searchParams.year,
      type: searchParams.type,
      page: searchParams.page,
    })
      .then((response) => {
        dispatch(setLoading(false));
        if (response.Response && response.Error) {
          dispatch(setError(response));
        } else {
          dispatch(setMovies(response.Search));
          dispatch(setError(null));
        }
      })
      .catch((error) => {
        dispatch(setLoading(false));
      });
  };

  const handlePageChange = (event, value) => {
    console.log("event", event);
    console.log("value", value);

    // Önce sayfa numarasını güncelle
    dispatch(
      updateSearchParams({
        ...searchParams,
        page: value,
      })
    );
  };

  return (
    <div>
      <InputGroup searchHandler={handleSearch} />
      {loading ? <TableSkeleton /> : <MoviesTable />}
      <Pagination
        count={30}
        page={page}
        onChange={handlePageChange}
        sx={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      />
    </div>
  );
};

export default Movies;
